# Alumni Management Database

## How to Setup

1. Open MySQL Workbench.
2. Create a new schema:
   ```sql
   CREATE DATABASE alumni_management;
   USE alumni_management;

3. Run the schema file:
  ->Open schema.sql
  ->Execute to create all tables

4. Insert sample data:
  ->Open sample_data.sql
  ->Execute to add demo records

Tables:
 ->users
 ->alumni_profiles
 ->events
 ->event_registrations
 ->mentorships
 ->jobs
 ->donations

Notes:
 ->users.email is unique
 ->Foreign keys maintain relationships
 ->You can run SELECT queries to test relationships



✅ **Next steps for you:**
1. Save these three files in your `database/` folder.  
2. Commit & push to your GitHub repo:

```bash
git add database/
git commit -m "Add schema, sample data, and README for database"
git push origin main
Show the database in MySQL Workbench during your hackathon demo.

