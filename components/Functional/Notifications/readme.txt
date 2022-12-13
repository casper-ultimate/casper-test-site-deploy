Notification System
    What triggers a Notification
    How to populate notifications from the backend
    //could listen for notification changes

Infrastucture:

What can fire a notification
    System
    Social 
    ...
        
Notification Schema
    data schema
    {


    }

    Endpoints
    {


    }   

    Real Time notifications
    vs 
    Prior notification messages

    ///////////

    future notes for other features
    What is the user going to see specifically in every context?

    ///////////
    The notification icon sits in the top bar.

    When notifications specific to the user have occured, set the number of notifications to the current amount.

    When notifications specific to the user are propagating, display them in a modal.
    
    What does the user see?
    A view with the collated notifications in the side bar or side modal.
    or A notification modal in the notification modal area, for a real time notification
    
    Firing notifications from an event source

    db store for archived notifications

    store notifications specific to users in their own sub-document.
    system notifications can propagate into user sub-documents

    when a system notification happens, write that notification into every user data document.
    (later we can figure out which users have sessions without consuming too many reads)

    pre-optimization idea:
    
    write notifications directly to the user session in the user payload.
    write notifications to the user data document, at the same time.

    we still need to poll for session changes. They don't have to just be notifications to flag a change.
    Use a heartbeat timeframe to poll for session changes.
    Register the user reference value into a dictionary, and increment the value for the specific session to flag that the session has changed.

    Let's create a database trigger that listens to the session changes.
    Anytime data relative to events that drive the ui are assigned into the session,
        propagate the session data into a bucket which is held in an ethereal session repository

    the ethereal session repository will be pinged by another service (which can sit on the same process)
    [to compare the checksum of the UI session, and if it does not match the ethereal session] respond with the session data to the UI.

    How to set the session from another source outside of loading the page for the first time.

    //////////

    We get the session which contains notification data
    We poll for session updates, which contain notifications if those are what updated.
    Setup elements based on the notification data we get.
    
    ////
    Create a database trigger to fire when the session has been created.
    The function will set a notification count value to read from the session data in the UI.