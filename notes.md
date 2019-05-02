**Data Modeling**

- captures all the data the system needs
- captures only the data the system needs
- reflects reality
- is flexible, can evolve with the system over time.
- guarantee data integrity
- is driven by the way the data will be used.

**Components**
- entities === resources -> tables (squares on paper)
- attributes -> columns (bulleted lists)
- relationships === sub-routes (/recipes/:id/ingredients) -> foreign keys

**Tracks**
- id: primary key, integer, auto-increment
- name: string(128char), unique, required(not nullable)

**Relationships**
- one to one -> one to zero or one
- one to many -> 
- many to many ->

**Mantra**
- for a many to many we need: **A Third Table**
- the most important tools for data modeling: **Ears and Pen/Paper**
- one to many relationships -> translate to: **Foreign Key**
- where does the Foreign Key go?: **On The Many Side**

## Model -> Slack
- a user can be in several channels
- a channel can have several participants

**Order Matters when making tables in the migration, due to foreign key referencing**


##Misc.
- possible to stop seed data from erasing previously written data.
- yes. Remove the .truncate/.del part of the seed files.