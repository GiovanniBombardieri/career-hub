<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use App\Http\Resources\CompanyResource;
use App\Models\Company;
use App\Queries\CompanyQuery;
use Illuminate\Http\Request;
use App\Http\Responses\ApiResponse;
use App\Models\User;

/**
 * @mixin \Illuminate\Routing\Controller
 */
class CompanyController extends Controller
{
    public function index(Request $request)
    {
        $user = User::first();
        $query = $user
            ->companies()
            ->getQuery();

//        $query = auth()
//            ->user()
//            ->companies()
//            ->getQuery();

        $companies = CompanyQuery::apply($request, $query)
            ->paginate(15)
            ->withQueryString();

        return ApiResponse::paginated(
            $companies,
            'Companies retrieved successfully',
        );
    }

    public function store(StoreCompanyRequest $request): \Illuminate\Http\JsonResponse
    {
        $company = Company::create([
            ...$request->validated(),
            'user_id' => 1,
            //'user_id' => $request->user()->id,
        ]);

        return ApiResponse::success(
            new CompanyResource($company),
            'Company created successfully',
        );
    }

    public function show(Company $company): \Illuminate\Http\JsonResponse
    {
        return ApiResponse::success(
            new CompanyResource($company),
            'Company retrieved successfully',
        );
    }

    public function update(
        UpdateCompanyRequest $request,
        Company $company
    ): \Illuminate\Http\JsonResponse {
        $company->update($request->validated());

        return ApiResponse::success(
            new CompanyResource($company->refresh()),
            'Company updated successfully',
        );
    }

    public function destroy(Company $company): \Illuminate\Http\JsonResponse
    {
        $company->delete();

        return ApiResponse::success(
            null,
            'Company deleted successfully',
        );
    }

//    public function __construct()
//    {
//        $this->authorizeResource(Company::class, 'company');
//    }
}
