
import { Router } from 'express';
import nedb from 'nedb-promises';
import { requireAdmin } from '../middlewares/authAdmin.js';

const menuDB = new nedb({ filename: 'airbean.db', autoload: true });


const router = Router();


router.get('/', async (req, res) => {
  try {
    const menuItems = await menuDB.find({});
    console.log("All menu items:", menuItems);
    res.json(menuItems);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).send("Internal Server Error");
  }
});




router.get('/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const menuItem = await menuDB.findOne({ _id: itemId });

    if (menuItem) {
      console.log("Menu item:", menuItem);
      res.json(menuItem);
    } else {
      res.status(404).send("Menu item not found");
    }
  } catch (error) {
    console.error("Error fetching menu item:", error);
    res.status(500).send("Internal Server Error");
  }
});


// Här är bara specifik kod för admins
// Här är bara specifik kod för admins
// Här är bara specifik kod för admins
// Här är bara specifik kod för admins






router.post('/', requireAdmin, async (req, res) => {
  try {
    const { id, title, desc, price } = req.body;
 

    if (!id || !title || !desc || !price) {
      return res.status(400).send('All properties (id, title, desc, price) are required.');
    }
  
    const newMenuItem = {
      id,
      title,
      desc,
      price,
      createdAt: new Date().toISOString()
    };
    const addedMenuItem = await menuDB.insert(newMenuItem);
    console.log("Added menu item:", addedMenuItem);
    res.status(201).json(addedMenuItem);
  } catch (error) {
    console.error("Error adding menu item:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.put('/:id', requireAdmin, async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedMenuItem = req.body;

    updatedMenuItem.modifiedAt = new Date().toISOString();


    const result = await menuDB.update({ _id: itemId }, { $set: updatedMenuItem });
    if (result) {
      console.log("Menu item updated successfully");
      res.status(200).json({ message: "Menu item updated successfully" });
    } else {
      res.status(404).send("Menu item not found");
    }
  } catch (error) {
    console.error("Error updating menu item:", error);
    res.status(500).send("Internal Server Error");
  }
});


router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const itemId = req.params.id;

    const result = await menuDB.remove({ _id: itemId });
    if (result) {
      console.log("Menu item deleted successfully");
      res.status(200).json({ message: "Menu item deleted successfully" });
    } else {
      res.status(404).send("Menu item not found");
    }
  } catch (error) {
    console.error("Error deleting menu item:", error);
    res.status(500).send("Internal Server Error");
  }
});


export default router;
export { menuDB };

