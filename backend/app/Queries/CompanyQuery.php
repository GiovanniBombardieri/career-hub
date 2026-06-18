<?php

namespace App\Queries;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class CompanyQuery
{
    public static function apply(Request $request, Builder $query): Builder
    {
        self::applySearch($request, $query);
        self::applyStatus($request, $query);
        self::applyRemotePolicy($request, $query);
        self::applySorting($request, $query);

        return $query;
    }

    private static function applySearch(Request $request, Builder $query): void
    {
        if (!$request->filled('search')) {
            return;
        }

        $search = $request->string('search');

        $query->where(function ($q) use ($search) {
            $q->where('name', 'ilike', "%{$search}%")
                ->orWhere('city', 'ilike', "%{$search}%")
                ->orWhere('country', 'ilike', "%{$search}%");
        });
    }

    private static function applyStatus(Request $request, Builder $query): void
    {
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }
    }

    private static function applyRemotePolicy(Request $request, Builder $query): void
    {
        if ($request->filled('remote_policy')) {
            $query->where('remote_policy', $request->remote_policy);
        }
    }

    private static function applySorting(Request $request, Builder $query): void
    {
        $sort = $request->get('sort', 'created_at');
        $order = $request->get('order', 'desc');

        $allowedSorts = ['name', 'created_at', 'status', 'score'];

        if (in_array($sort, $allowedSorts)) {
            $query->orderBy($sort, $order === 'asc' ? 'asc' : 'desc');
        }
    }
}
