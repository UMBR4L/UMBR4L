# BrainFlix

## Sprint 1

### Project Overview

- you are approached by an entrepeneur to build out a functioning and responsive prototype for a new video streaming platform called "BrainFlix"
- the creative directory provides you with a package and mockup of how they envision the final product
- there is a separate team working on a backend API that will need to be integrated with the front end, but for now just put together the static components
- when submitting, ensure you merge your develop branch with your main branch and submit the link to your GitHub repository

### Tools & Resources

- npm can be used to install JS libraries that will help you complete your project

### Functional Requirements

- the "Next Video" sidebar must not contain the current video being displayed
- components should render using dynamic data, not hardcoded HTML
    - i.e. comments, current video, and video-list sections
- Side Videos should be clickable and upon selecting a video, you should update the Main Video section to display the detail and comments of a new video
    - use states to update the UI upon the side-videos being clicked

### Implementation Requirements

- follow conventions outlined in the "Project Guidelines" section in Synapse
- the site must be composed of multiple React components
- must use the '<video>' tag for the video player
    - it won't be functional for this sprint. All visual elements of the video player must simply exist on the deliverable without functionality
    - use the poster attribute to have the video player resemble the mockup
    - video controls should be the default <video> controls with default styling (we will re-style them in a later sprint)
- use state to hold the data from the data files in assets, and pass it down as props to generate side-videos and main-video content, including comments
    - the data files provided are meant to mimic a REST API response
        - one endpoint will return a small amount of data for each video that exists
        - the other endpoint will return all the data for one specific video
    - the main-video should be included in the side-videos array held in state (with the same object keys as other side-video objects) and filtereed out of the side-videos section programmatically when rendering the component
    - the main-video object, with extended properties, should be held in a separate portion of state
- the comments-section form doesn't need to be functional
    - you don't need to be able to post new comments for this Sprint
    - but the comments still need to be rendered dynamically (i.e. data coming from comments property of the main-video object stored in state)
- layout of the site must use Flexbox

### Project Structure

- remember to use develop & feature branches for development this sprint

### Diving Deeper

#### Dynamic Timestamp

- update the timestamp in the comments section and video details to reflect when it was posted in a more human-readable format (without hardcoding the timestamp)
    - e.g. on YouTube, a recently posted comment might display the time posted as "10 minutes ago" or "3 days ago"

-- draw structure of components