<?php

namespace App\Enums;
enum ContactRelationshipStatus: string
{
    case NotContacted = 'not_contacted';
    case Contacted = 'contacted';
    case Replied = 'replied';
    case Interviewed = 'interviewed';
    case Connected = 'connected';
}
