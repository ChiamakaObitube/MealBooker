import MealService from '../services/meal.services'

const MealController = {
    fetchAllMeals(req, res) {
        const allMeals = MealService.fetchAllMeals();
        return res.json({
            status: 'success',
            data: allMeals
        });
    },

    addMeal(req, res) {
        const newMeal = req.body;
    }
}