const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route
// GET Route - it will get all of data from gallery table
router.get('/', (req, res) => {
    let sqlList = 'SELECT * FROM "gallery";';
    
    pool.query(sqlList)
    .then((result) => {
        console.log('DB recieved the gallery')
        res.send(result.rows);
    }).catch((error) => {
        console.log(`ERROR making DB query ${sqlList}`,error )
    })
}); // END GET Route
// PUT route -- It update likes status
router.put('/like/:id', (req, res) => {
    // Request/Get the id selected
    const galleryId = req.params.id;
    // Need to figure out how to increment everytime. Could this issue be in setting up the table or add += 1 in Client?
    const sqlText = `
    UPDATE gallery SET "likes" = 1 WHERE id = $1;
    `
    pool.query(sqlText, [galleryId])
    .then((result) => {
      res.sendStatus(200)
    }).catch((err) => {
      alert('Error Up')
      res.sendStatus(500)
    });
  })
// DELETE Route It will delete by Id seleceted
router.delete('/delete/:id', (req,res) => {
    const galleryId = req.params.id;

    const sqlDelete = `DELETE FROM "gallery" WHERE id = $1`;

    pool.query(sqlDelete,[galleryId])

    .then((response) => {
        // Send an OK status
        res.sendStatus(201);
    // Catch any Error
    }).catch((error) => {
        console.log(`ERROR in: ${sqlDelete}`, error);
        // Send an Error status
        res.sendStatus(500);
    })
})

router.post
module.exports = router;