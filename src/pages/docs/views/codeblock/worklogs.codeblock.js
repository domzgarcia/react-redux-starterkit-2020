module.exports = `
// # app/modules/worklogs/controler.js

var result = LogChecker(
    ORIGINAL_WORKLOGS, 
    QueLogs, 
    toastr,
    userCurrentAction, 
    isTimeChanged, 
    { // rawLogs
        user: this.state.cacheWhenAddingLog,
        cache: this.state.cacheWhenEditingLog,
    },
    // globalRef
    this.state.worklogs,
    // special case callback
    ( updateWorklogs ,  logInsert ) => {
        this.setState({ worklogs: updateWorklogs, },
        () => {
            // Do all updates
            this.renderWorkLogs(this.state.worklogs);	
    ...
);
/* Will Return Boolean or String
1. When true, allowed added logs and update all states.
2. When false, retain the previous state.
3. When String, Special case do nothing.
*/
`.trim();