<?php

namespace App\Enums;
enum CompanyStatus: string
{
    case Prospect = 'prospect';
    case Watching = 'watching';
    case Interested = 'interested';
    case Applied = 'applied';
    case Interviewing = 'interviewing';
    case Rejected = 'rejected';
    case Employee = 'employee';
    case Archived = 'archived';
}
