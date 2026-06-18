<?php

namespace App\Enums;
enum ActivityType: string
{
    case Note = "note";
    case Email = "email";
    case Call = "call";
    case Meeting = "meeting";
    case FollowUp = "follow_up";
    case Interview = "interview";
}
