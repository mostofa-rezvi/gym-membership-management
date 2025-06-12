# 🏋️‍♂️ Gym Membership Management System

A full-stack Gym Membership Management System built with **Angular 18** and **Spring Boot**. It allows gym staff to register members, manage their payments, and view insightful analytics using bar and line charts.

---

## 📋 Features

### 🔧 Frontend (Angular 18)

- **Member Registration Form**
  - Text inputs: Name, Email, Phone
  - Date pickers: Date of Birth (DOB), Join Date
  - Dropdown: Membership Type (e.g., Monthly, Quarterly, Yearly)
  - Checkbox: Optional services (e.g., Personal Trainer, Diet Plan)

- **Payment Tracking Modal**
  - Inputs: Amount, Payment Date, Payment Method, Membership Period

- **Parent-Child Component Communication**
  - `MembershipDashboard` (Parent) communicates with `MemberCard` (Child) to display and update individual member details dynamically

- **Data Visualization**
  - Bar Chart: Shows number of members by membership type
  - Line Chart: Displays monthly revenue trends

---

### 🛠️ Backend (Spring Boot)

- **Member Entity**
  - `id` (Long)
  - `name` (String)
  - `email` (String)
  - `phone` (String)
  - `dob` (LocalDate)
  - `joinDate` (LocalDate)
  - `membershipType` (Enum/String)
  - `status` (e.g., Active, Inactive)

- **Payment Entity**
  - `id` (Long)
  - `memberId` (Long - FK)
  - `amount` (Double)
  - `paymentDate` (LocalDate)
  - `paymentMethod` (String)
  - `membershipPeriod` (e.g., 1 month, 3 months)

- **CRUD Operations**
  - RESTful APIs for creating, reading, updating, and deleting Member and Payment records

---

## 🧱 Tech Stack

| Category       | Technologies                      |
|----------------|-----------------------------------|
| Frontend       | Angular 18, TypeScript, RxJS, Chart.js or Recharts |
| Backend        | Spring Boot 3, Java 17+, Spring Data JPA |
| Database       | MySQL                             |
| Styling        | Bootstrap or Tailwind CSS         |
| Tools          | REST API, Postman, Maven, Git     |

---

## 📁 Folder Structure

### Frontend: `gym-frontend/`

