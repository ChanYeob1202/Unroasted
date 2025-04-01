const courses = require('../data/courses');

const validateCourse = async (req, res, next) => {
    try {
        const { courseId } = req.body;
        if (!courseId) {
            return res.status(400).json({
                error: 'Missing courseId',
                message: 'Please provide a courseId'
            });
        }

        const course = courses.find(course => course.id === courseId);

        if (!course) {
            return res.status(404).json({
                error: 'Course not found',
                message: `No course found with ID: ${courseId}`
            });
        }

        req.course = course;
        next();
    } catch (error) {
        console.error('Course validation error:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = validateCourse;
