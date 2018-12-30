
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const patientRouter = require('./routes/newPatient.router');
const postOpRouter = require('./routes/post_op.router');
const adverseEventsRouter = require('./routes/adverse_event.router');
const followUpRouter = require('./routes/follow_up.router');
const recurrenceRouter = require('./routes/recurrence.router');
const manageUsersRouter = require('./routes/manageUsers.router');
const pathologyNotesRouter = require('./routes/pathologyNotes.router')
const operativeNotesRouter = require('./routes/operativeNotes.router')
const interventResectionRouter = require('./routes/interventionResection.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/add-a-patient', patientRouter);
app.use('/api/find-a-patient', patientRouter);
app.use('/api/post_op', postOpRouter);
app.use('/api/adverse_event', adverseEventsRouter);
app.use('/api/follow_up', followUpRouter);
app.use('/api/recurrence', recurrenceRouter);
app.use('/addNewUser', manageUsersRouter)
app.use('/getAllUsers', manageUsersRouter) 
app.use('/editUserProfile', manageUsersRouter)
app.use('/addNewUser', manageUsersRouter);
app.use('/getAllUsers', manageUsersRouter); 
app.use('/editUserProfile', manageUsersRouter);
app.use('/getIndividualProfile', manageUsersRouter);
app.use('/pathologyNotes', pathologyNotesRouter);
app.use('/operativeNotes', operativeNotesRouter);
app.use('/interventionResection', interventResectionRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
