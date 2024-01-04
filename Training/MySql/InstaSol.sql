# 5 oldest user

Select * from users order by created_at limit 5;


#TOP 2 most register day

Select  dayname(created_at) as weekDay from users group by weekDay;
SELECT 
    DAYNAME(created_at) AS day,
    COUNT(*) AS total
FROM users
GROUP BY day
having total=(select max());
;

select max(total) from(
SELECT 
    COUNT(*) AS total
FROM users
GROUP BY  DAYNAME(created_at));
# user with no photos

Select * from users  u left join photos p on u.id = p.user_id  where p.user_id is null ;


# MOST liked photo
SELECT 
    username,
    photos.id,
    photos.image_url, 
    COUNT(*) AS total
FROM photos
INNER JOIN likes
    ON likes.photo_id = photos.id
INNER JOIN users
    ON photos.user_id = users.id
GROUP BY photos.id
ORDER BY total DESC
LIMIT 1;



# Solution 2
 
SELECT 
    DAYNAME(created_at) AS day,
    COUNT(*) AS total
FROM users
GROUP BY day
having total =(SELECT MAX(total) FROM (
    SELECT 
        COUNT(*) AS total
    FROM users
    GROUP BY DAYNAME(created_at)
) AS daily_counts);


 # Solution
 SELECT tags.tag_name, 
       Count(*) AS total 
FROM   photo_tags 
       JOIN tags 
         ON photo_tags.tag_id = tags.id 
GROUP  BY tags.id 
ORDER  BY total DESC 
LIMIT  5; 

SELECT username, 
       Count(*) AS num_likes 
FROM   users 
       INNER JOIN likes 
               ON users.id = likes.user_id 
GROUP  BY likes.user_id 
HAVING num_likes = (SELECT Count(*) 
                    FROM   photos); 