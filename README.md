# PhotoGem Website and iOS app
Website for PhotoGem iOS app.  
[View Website](https://diamond4mobile.com/)  
[View in AppStore](https://apps.apple.com/us/app/photogem-caption-editor/id1238546341)  

## Website Overview
The website was made using HTML/CSS and JavaScript with features such as an animated carrossel screenshot viewer, and an accordion style help menu.
I also made the "PhotoGem" text logo at the top of the page.   
  
This was the first website I ever made and there are many things I would do differently with the knowledge I have gained since making it.

## App Overview
PhotoGem is my uncle’s iOS app that adds many features to Apple's “Photos” app. The app is written in Swift and has features such as mapping all your photos GPS data, changing the photos METADATA, and creating custom albums based on this data. I implemented the logic for using the photo’s GPS data to find Wikipedia pages that are near it, usually finding results such as historical landmarks or government buildings.  Currently I am working on implementing the ability to edit captions of photos using Apple’s internal SQLite databases.

### Full features list:
* __Map__ - Adjust the height, type (standard or satellite) & zoom level. Includes the Image Direction Arrow to show direction the camera was pointing. Also includes several location aware links to explore the photo’s location.
* __Google Street View Link__ -
click to launch into a Google Street View right where the photo was taken (when available).
* __Wikipedia Link__ - 
Configure a Wikipedia page for the photo. Page name is saved with the photo as the photo’s Headline.
* __Apple Maps Link__ -
Launch into Apple Maps at the photo’s location.
* __Search Link__ -
Performs a google search for a photo based on location description.
* __Caption Viewer/Editor__ -
Add your own descriptions to the photo. PhotoGem saves it along with the image in the photo library.
* __Location Editor__ -
tap the Map to add or adjust the photo’s gps coordinates. Useful for adding missing location (like from scanned photos). You can also adjust the image direction to set the initial Google Street View image.
* __Audio Clips__ - 
Either tap the play button for the photo or configure to “Autoplay” when the image is loaded. Assign a clip to a photo by either browsing for an audio file or simply tapping the record button.
* __Photo Property Viewer__ - 
Includes basic properties along with EXIF, IPTC, TIFF & GPS.
* __Customizable Panels__ -
The Map, Description Viewer, Photo Properties and Audio Clips that are viewed can be setup with an easy to use layout tool. Similar to the the way you configure the Today View Widgets in iOS.
* __Other Features__ -
Online Help, Dark Mode, iPad Multitasking Support with Split Screen, Slide Over & Drag & Drop.
