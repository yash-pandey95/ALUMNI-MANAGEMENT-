-- USERS
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('student','alumni','admin') DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ALUMNI PROFILES
CREATE TABLE alumni_profiles (
    alumni_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE,
    graduation_year YEAR,
    degree VARCHAR(100),
    company VARCHAR(100),
    designation VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- EVENTS
CREATE TABLE events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    event_date DATE NOT NULL,
    location VARCHAR(200)
);

-- EVENT REGISTRATIONS
CREATE TABLE event_registrations (
    registration_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    event_id INT,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE,
    UNIQUE(user_id, event_id) -- prevent duplicate registration
);

-- MENTORSHIPS
CREATE TABLE mentorships (
    mentorship_id INT AUTO_INCREMENT PRIMARY KEY,
    alumni_id INT,
    student_id INT,
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (alumni_id) REFERENCES users(user_id),
    FOREIGN KEY (student_id) REFERENCES users(user_id)
);

-- JOBS
CREATE TABLE jobs (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    posted_by INT,
    title VARCHAR(200),
    description TEXT,
    company VARCHAR(100),
    location VARCHAR(100),
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (posted_by) REFERENCES users(user_id)
);

-- DONATIONS
CREATE TABLE donations (
    donation_id INT AUTO_INCREMENT PRIMARY KEY,
    donor_id INT,
    amount DECIMAL(10,2),
    donation_date DATE DEFAULT (CURRENT_DATE),
    purpose VARCHAR(200),
    FOREIGN KEY (donor_id) REFERENCES users(user_id)
);

-- INDEXES for Optimization
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_events_date ON events(event_date);
