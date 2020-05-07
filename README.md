# CC Component

CC component for code challenge. The example json payload is being served from the Django API built for this exercise. You can see that [here](https://joepena.pythonanywhere.com/api/recommendations).

And [here](https://github.com/Joe-Pena/cc-component-backend) is the repo for the API.

## Live Site

Threw the app on Netlify. You can see it [here](https://cc-component.netlify.app/)!

## Set Up

1. Clone down the repo
   > `git clone https://github.com/Joe-Pena/cc-component.git`
2. Install dependencies
   > `npm install`
3. Start the server
   > `npm run serve`
4. visit [localhost:8080](http://localhost:8080) to view the site.

## Embedding into Ascent

The component is pretty simple. The main component we're looking at is called `CreditCardFinder`, which also calls on two other components:

`ActTile`: The tiles we see to select both credit score and credit card type.

`CardInfo`: Component which shows us all the info we need in order to be able to compare the two cards we receive from the API. This component also renders `CardRating`, which is just the star rating of the card.

I tried to keep it as modular as possible, so if you were to copy these three components into The Ascent project, you should be able to easily place it anywhere, as long as you have the env variable `VUE_APP_API_URL`(Or equivalent in your codebase) and replace the path to the api (Which here is `/api/recommendations`).

## Design

Since the instructions mentioned this should be a component that could be reused on the actual website, I decided to simulate the website as best as I could.

You'll notice there's some dummy sections, header, and footer, and the main purpose of it was just to create the 12-column grid environment that is set up on the original website. I tried my hardest to match up the class names, with the intention that the next dev touching this wouldn't need to rename classes, making the integration of this component as easy as possible.

The one component that might not match the set up of The Ascent might be the `CardInfo`. It looks essentially the same as the mobile card viewer you can see [here](https://www.fool.com/the-ascent/credit-cards/), however, since the main goal of this assignment was to draw a comparison between the two cards found, I added some extra grid rules in order to have each section be a fixed size, so that both the cards are the same size, and align each section horizontally with one another, making easier to compare and choose, and no biggy if one card happens to have **WAY** more info than the other, if that's the case, the section will stretch to fit the content.

Overall I tried to keep it as close to the _feel_ of The Ascent, and hope I achieved that with this. Overall, this was a pretty good little side project! Got to learn a lot about both Vue and Django!
