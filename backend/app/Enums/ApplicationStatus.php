<?php

namespace App\Enums;
enum ApplicationStatus: string
{
    case Wishlist = 'wishlist';
    case Preparing = 'preparing';
    case Applied = 'applied';
    case Interviewing = 'interviewing';
    case Offer = 'offer';
    case Rejected = 'rejected';
    case Withdrawn = 'withdrawn';
}
