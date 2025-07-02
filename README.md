# Gym Membership Management System

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=netlify)](https://fitzone-gym-portal.netlify.app/)

---

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/mostofa-rezvi/gym-membership-management)

---

A full-stack Gym Membership Management System built with **Angular 18** and **Spring Boot**. It allows gym staff to register members, manage payments, and view insightful analytics using dynamic charts. Ideal for small to medium-sized fitness centers looking to modernize their member tracking and finances.

---

## Features

### 🔧 Frontend (Angular 18)

-  **Member Registration Form**
  - Inputs: Name, Email, Phone
  - Date Pickers: DOB, Join Date
  - Dropdown: Membership Type (Monthly, Quarterly, Yearly)
  - Checkbox: Optional services (Personal Trainer, Diet Plan)

-  **Payment Tracking Modal**
  - Fields: Amount, Payment Date, Method, Membership Period

-  **Component Communication**
  - `MembershipDashboard` (Parent) ↔ `MemberCard` (Child)

-  **Data Visualization**
  - **Bar Chart:** Members per membership type
  - **Line Chart:** Monthly revenue trends

---

###  Backend (Spring Boot)

-  **Entities**
  - `Member`: Stores personal and membership info
  - `Payment`: Tracks payment details linked to members

-  **RESTful APIs**
  - Full CRUD for Member & Payment records

-  **Database**
  - MySQL with Spring Data JPA

---

##  Tech Stack

| Category       | Technologies                                 |
|----------------|----------------------------------------------|
| **Frontend**   | Angular 18, TypeScript, RxJS, Chart.js       |
| **Backend**    | Spring Boot 3, Java 17+, Spring Data JPA     |
| **Database**   | MySQL                                        |
| **Styling**    | Bootstrap / CSS                     |
| **Tools**      | REST API, Postman, Maven, Git                |

---

##  Getting Started

###  Prerequisites

- Node.js (v18+)
- Angular CLI
- Java 17+
- MySQL
- Maven

---

###  Backend Setup (Spring Boot)

ym-membership-management/gym-backend

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/gym-membership-management.git
   cd gym-membership-management/gymMember
   ```

2. Configure MySQL in `application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/gym_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Run the backend:

   ```bash
   mvn spring-boot:run
   ```

---

### 💻 Frontend Setup (Angular)

1. Navigate to frontend:

   ```bash
   cd ../gymMembership
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   ng serve
   ```

4. Open in browser: [http://localhost:4200](http://localhost:4200)

---

##  API Endpoints

###  Member Controller

```http
GET    /api/members
POST   /api/members
PUT    /api/members/{id}
DELETE /api/members/{id}
```

###  Payment Controller

```http
GET    /api/payments
POST   /api/payments
GET    /api/payments/member/{memberId}
PUT    /api/payments/{id}
DELETE /api/payments/{id}
```

---

##  Author

**Mostofa Rezvi**  
 mostofa.aminur.rezvi@gmail.com  
 Azimpur, Dhaka

---

##  Future Improvements

-  JWT-based Authentication & Authorization  
-  Invoice generation with PDF export  
-  Email reminders for upcoming or missed payments  
-  Member profile picture uploads  
-  Enhanced dashboard filters and search functionality  

---

##  License

This project is open-source and available under the [MIT License](LICENSE).

---

##  Optional Add-ons

Would you like to:

-  Add Docker support for easier deployment?
-  Set up a live demo (e.g., Vercel for frontend, Render or Railway for backend)?
-  Auto-generate Swagger API documentation?

Just let me know — happy to help!
