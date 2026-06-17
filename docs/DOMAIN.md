# Domain Documentation

## Purpose

Career HUB helps users organize and manage their professional opportunities.

The application combines:

- Company database
- Contact management
- Position tracking
- Application tracking
- Activity history
- Analytics

The goal is to provide a complete overview of a user's professional ecosystem.

---

# Domain Model

## User

The owner of all data.

A user can manage:

- Companies
- Contacts
- Positions
- Applications
- Activities
- Tags

---

## Company

Represents an organization of interest.

A company may exist without:

- Positions
- Applications
- Contacts

Examples:

- Future target company
- Dream company
- Company under observation

### Responsibilities

- Store company information
- Track company status
- Organize positions and contacts

---

## Contact

Represents a person associated with a company.

Examples:

- Recruiter
- CTO
- Engineering Manager
- Founder

### Responsibilities

- Store communication information
- Track relationship status
- Keep notes

---

## Position

Represents a job opportunity inside a company.

Examples:

- Backend Developer
- Full Stack Developer
- PHP Developer

A company can have multiple positions.

---

## Application

Represents an application submitted for a position.

Applications are linked to positions.

### Lifecycle

Draft

Applied

HR Interview

Technical Interview

Final Interview

Offer

Accepted

Rejected

Ghosted

---

## Activity

Represents an event that occurred during the lifecycle of a company or application.

Examples:

- Company added
- Contact added
- Application submitted
- Interview completed
- Offer received

Activities create a chronological history.

---

## Tag

Represents a label assigned to companies.

Examples:

- PHP
- Laravel
- React
- Fintech
- Startup
- Remote

Tags allow categorization and filtering.

---

# Business Rules

## Companies

A company can exist without positions.

A company can exist without applications.

A company can have multiple contacts.

A company can have multiple positions.

---

## Positions

A position belongs to exactly one company.

A position can have multiple applications.

---

## Applications

An application belongs to exactly one position.

An application can generate multiple activities.

---

## Contacts

A contact belongs to exactly one company.

A contact has exactly one role.

---

## Activities

An activity always belongs to a company.

An activity may optionally belong to an application.

---

# Long-Term Vision

Career HUB should evolve from a personal job tracking tool into a complete Career Relationship Management platform.

Future versions may include:

- Multi-user support
- Team collaboration
- Automated imports
- Job board integrations
- AI-powered insights
- SaaS deployment
