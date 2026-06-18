<?php

namespace App\Enums;
enum RemotePolicy: string
{
    case OnSite = 'on_site';
    case Hybrid = 'hybrid';
    case Remote = 'remote';
    case RemoteFirst = 'remote_first';
    case Unknown = 'unknown';
}
