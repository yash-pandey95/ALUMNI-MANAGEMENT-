-- USERS
INSERT INTO users (name, email, password, role) VALUES
('Yash Pandey', 'yash@example.com', 'hashedpass', 'student'),
('Harsh Sharma', 'harsh@example.com', 'hashedpass', 'alumni'),
('Komal Singh', 'komal@example.com', 'hashedpass', 'student'),
('Piyush Kumar', 'piyush@example.com', 'hashedpass', 'alumni'),
('Swapnil Patil', 'swapnil@example.com', 'hashedpass', 'admin');

-- ALUMNI PROFILES
INSERT INTO alumni_profiles (user_id, graduation_year, degree, company, designation) VALUES
(2, 2020, 'B.Tech CSE', 'Infosys', 'Software Engineer'),
(4, 2019, 'B.Tech ECE', 'TCS', 'System Analyst');

-- EVENTS
INSERT INTO events (title, description, event_date, location) VALUES
('Alumni Meet 2025', 'Annual alumni meet to reconnect.', '2025-10-10', 'College Auditorium'),
('Tech Talk by Alumni', 'Talk on AI & IoT trends.', '2025-09-25', 'Seminar Hall');

-- EVENT REGISTRATIONS
INSERT INTO event_registrations (user_id, event_id) VALUES
(1, 1), (3, 1), (2, 2);

-- MENTORSHIPS
INSERT INTO mentorships (alumni_id, student_id, start_date) VALUES
(2, 1, '2025-09-01'),
(4, 3, '2025-09-05');

-- JOBS
INSERT INTO jobs (posted_by, title, description, company, location) VALUES
(2, 'Software Developer', 'Full stack developer role.', 'Infosys', 'Pune'),
(4, 'Embedded Engineer', 'Work on IoT devices.', 'TCS', 'Bangalore');

-- DONATIONS
INSERT INTO donations (donor_id, amount, purpose) VALUES
(2, 5000, 'Library Development'),
(4, 10000, 'Student Scholarships');
