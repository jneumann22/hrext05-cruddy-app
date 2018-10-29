### Cruddy App Todo

#### Basic Improvments (requirements)

- [ ] create indivdiual items
        - My app is going to be a planner. 
        - Instead of appending items/events to a simple div, I'm going to create a list element that will be appended to by each use of the add-text-button. Each item added will also take on an ID which will be the same as the event date. Each item added will also be added to local storage. I will have 5 input elements, one of which will be an EVENT NAME, DATE, LOCATION, TIME, PARTICIPANTS.
            -- Each item will be a calendar event, the key for each item will be the Name. It will have values stored as properties of date, completed, time, participants and location as properties of an object that will be stored in the values of the local storage. In order to do this, I will need to stringify the data because local storage can only handle string data. When retrieving this data I will need to parse the string back into an object. 
- [ ] delete individual items
        -Once an event/item is added user will be able to mark event as completed or just delete the item and it will be removed from the planner/DOM as well as local storage. I will be using the selectable feature from Jquery UI and when an item is selected and the user presses the Delete-button the item will be removed.

        -Use the removeItem() method of the local storage to do this rather than clear. Find a way to populate the removeItem method by taking the text from a selected item. 
- [ ] edit individual items
        -I am going to add an additional 'Edit Event' button which when an item is selected will repopulate the inputs with the information from the event. The user can then update the information and add it back. 

##### Notes
- [ ] Keep DOM and localStorage matching 
- [ ] Remember event Delegation when adding new items to .show-text
- [ ] make sure we do not duplicate data
- [ ] add different values to the item

  ex.
```javascript
 item =  {
  id: "thing used for key",
  text-value: "some text",
  categories: [ 'cat1', 'cat2' ],
  isComplete: boolean,
  dateCreated: dateCreated,
  dateCompleted: dateCompleted
  ...
  etc
  }
```

#### Potential Libraries
- [ ] lodash/underscore
- [ ] jquery ui
- [ ] bootstrap/material (css library)

#### My Spin
  -- My app is going to be a planner. User will input the date, name, location, time and participants of the event they want added to their planner. 
  JQUERY UI
  --Using jquery UI I am going to add a date picker function. This will be added at the same time that the user adds the event to the planner and will become the key of the item added to the local storage. 

  --*****I may not get to this feature if I do not have time
  Using Jquery UI I am also going to add the selectable feature. When an item is selected and the user presses the Delete-Button, the selected item will be removed from the planner(DOM) as well as local storage.   
  

Materialize CSS
  - I plan to add the collapsible feature to each list element that the user creates. When clicked on it will be selected as well as drop down a list of time, location, Participants, and completed.



  ROUGH SCHEDULE:
  Monday: Plan out features of my app

  Tuesday: Create my add event feature using name of event as the key and have it store properties of date, time, location, and participants as value.

  Delete Button: Be able to select individual events and remove them from DOM and local storage. 

  Edit Button: Repopulates the input elements with the data from the event selected and allows user to change inputs. 

  Wednesday: Implement the datepicker method from JQUERY UI 

  Thursday: Style the app--->

  Implement the collapsible CSS from materialize that will display the values of date, time, location, participants

  Friday: Practice presenting


