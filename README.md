# fullcycle-NginxComNode

# List all running Docker containers

```
docker ps
```

# Access the MySQL container

```
docker exec -it <container_id> mysql -u root -pyourpassword testdb
docker exec -it b293a04588c2 mysql -u root -pyourpassword testdb
```

# Inside MySQL, inspect the 'people' table

```
SELECT * FROM people;
```
