# Ethereal Studios development process

# RoadMap -

# Step 1 - Create a wire frame. What will this app consist of?

<img src="/Users/dreamzavenue/app-builds/ethereal-studios/public/images/Eth-Ruff-Draft.JPG" alt="wire frame of ethereal studios frontend">

### Observing the process of building past projects I noticed that having a plan of action is mandatory. forming the idea in my head and then on paper is the very first step becausse I need to know what things are doing and what goes where. This wire frame should give you an Idea where my thinking process was.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### first debug

you may need an appropriate loader - 
The issue is webpack doesn't understand React's JSX syntax so it's unable to handle this file type appropriately. In order to fix this you need to set up a webpack loader to transform JSX into native JavaScript. To accomplish this you will need to leverage babel's babel-loader and install the appropriate babel preset, namely the "@babel/preset-react" preset.

