INSERT INTO department (names)
VALUES
  ('IT'),
  ('Security'),
  ('Housecleaning'),
  ('Cafeteria'),
  ('Business'),
  ('Sales');

  INSERT INTO roles (title, salary)
VALUES
  ('Manager', '90000'),
  ('Cleaning', '60000'),
  ('SalesRep', '80000'),
  ('SecurityGuard', '70000');

  INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ravi', 'Mahinder', '1', null),
  ('Mahi', 'Kali', '2', null);

    INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Fathima', 'Navaz', '1', '1');

