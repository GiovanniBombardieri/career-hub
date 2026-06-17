# Entity Relationship Diagram

## Overview

Career HUB is built around six core entities:

- User
- Company
- Contact
- Position
- Application
- Activity

Additional supporting entities:

- Tag
- ContactRole

---

# Relationships

User
│
├── Companies
│   ├── Contacts
│   │     └── ContactRole
│   │
│   ├── Positions
│   │     └── Applications
│   │
│   ├── Activities
│   │
│   └── Tags
│
└── Personal Workspace

---

# Database Schema

### users

| Column | Type | Nullable |
|----------|----------|----------|
| id | bigint | No |
| name | string | No |
| email | string | No |
| password | string | No |
| created_at | timestamp | No |
| updated_at | timestamp | No |

### companies

| Column | Type | Nullable |
|----------|----------|----------|
| id | bigint | No |
| user_id | bigint FK | No |
| name | string | No |
| website | string | Yes |
| linkedin_url | string | Yes |
| country | string | No |
| region | string | Yes |
| city | string | Yes |
| remote_policy | enum | No |
| company_size | string | No |
| status | enum | No |
| score | decimal(5,2) | Yes |
| why_interested | text | Yes |
| created_at | timestamp | No |
| updated_at | timestamp | No |

### contacts

| Column | Type | Nullable |
|----------|----------|----------|
| id | bigint | No |
| company_id | bigint FK | No |
| contact_role_id | bigint FK | No |
| full_name | string | No |
| email | string | Yes |
| linkedin_url | string | Yes |
| relationship_status | enum | No |
| notes | text | Yes |
| created_at | timestamp | No |
| updated_at | timestamp | No |

### contact_roles

| Column | Type | Nullable |
|----------|----------|----------|
| id | bigint | No |
| name | string | No |
| description | text | Yes |

Seed:
- HR RECRUITER
- TECHNICAL RECRUITER
- TALENT ACQUISITION
- CTO
- CEO
- FOUNDER
- ENGINEERING MANAGER
- TEAM LEAD
- OTHER

### tags

| Column | Type | Nullable |
|----------|----------|----------|
| id | bigint | No |
| user_id | bigint FK | No |
| name | string | No |
| created_at | timestamp | No |
| updated_at | timestamp | No |

### company_tag

| Column | Type | Nullable |
|----------|----------|----------|
| company_id | bigint FK | No |
| tag_id | bigint FK | No |

### positions

| Column | Type | Nullable |
|----------|----------|----------|
| id | bigint | No |
| company_id | bigint FK | No |
| title | string | No |
| salary_min | integer | Yes |
| salary_max | integer | Yes |
| currency | string(3) | No |
| remote | boolean | No |
| source | string | Yes |
| url | string | Yes |
| description | text | Yes |
| published_at | timestamp | Yes |
| created_at | timestamp | No |
| updated_at | timestamp | No |

### applications

| Column | Type | Nullable |
|----------|----------|----------|
| id | bigint | No |
| position_id | bigint FK | No |
| status | enum | No |
| expected_salary | integer | Yes |
| offer_salary | integer | Yes |
| applied_at | timestamp | Yes |
| rejection_reason | text | Yes |
| notes | text | Yes |
| created_at | timestamp | No |
| updated_at | timestamp | No |

### activities

| Column | Type | Nullable |
|----------|----------|----------|
| id | bigint | No |
| company_id | bigint FK | No |
| application_id | bigint fk | Yes |
| type | string | No |
| title | string | No |
| description | text | Yes |
| occurred_at | timestamp | No |
| created_at | timestamp | No |
| updated_at | timestamp | No |

### company_notes

| Column | Type | Nullable |
|----------|----------|----------|
| id | bigint | No |
| company_id | bigint FK | No |
| content | text | No |
| created_at | timestamp | No |
| updated_at | timestamp | No |

# Enumerations

### companyStatus
PROSPECT
WATCHING
INTERESTED
APPLIED
INTERVIEWING
REJECTED
EMPLOYEE
ARCHIVED

### remotePolicy
ON_SITE
HYBRID
REMOTE
REMOTE_FIRST
UNKNOWN

### applicationStatus
DRAFT
APPLIED
HR_INTERVIEW
TECH_INTERVIEW
FINAL_INTERVIEW
OFFER
ACCEPTED
REJECTED
GHOSTED

### contactRelationshipStatus
NOT_CONTACTED
CONTACTED
REPLIED
INTERVIEWED
CONNECTED

# Indexes

## companies
INDEX(user_id)
INDEX(status)
INDEX(remote_policy)
INDEX(city)
INDEX(created_at)
INDEX(user_id, status) | composite index

## contacts
INDEX(company_id)
INDEX(contact_role_id)
INDEX(relationship_status)

## contact_roles
UNIQUE(name)

## tags
INDEX(user_id)
UNIQUE(user_id, name)

## company_tag
PRIMARY(company_id, tag_id)

## positions
INDEX(company_id)
INDEX(title)
INDEX(published_at)
INDEX(company_id, published_at) | composite index

## applications
INDEX(position_id)
INDEX(status)
INDEX(applied_at)
INDEX(status, applied_at) | composite index

## activities
INDEX(company_id)
INDEX(application_id)
INDEX(type)
INDEX(occurred_at)
INDEX(company_id, occurred_at) | composite index

## company_notes
INDEX(company_id)
INDEX(created_at)
INDEX(company_id, created_at) | composite index

# Constraints

users.email UNIQUE
contact_roles.name UNIQUE
tags(user_id, name) UNIQUE
company_tag(company_id, tag_id) UNIQUE
