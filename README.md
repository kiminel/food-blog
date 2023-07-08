# Food Blog

## This project is a Food Blog that contains traditional South African recipes.

## Start up

Run the following commands to spin up locally:

    npm i
    npm run build
    npm run start

### Details:

Each Blog Post is a Recipe which belongs to one of the following Categories:

- Main Course
- Side Dish
- Dessert

There are mock Comments from mock Users being pulled in as well.

## Hosting

Open the Link below to view a Hosted version of this project:

[Food Blog Hosting TBC](https://www.google.com)

## Troubleshooting

If any errors occur, it might be an issue with the environment variables.
To fix this, paste the following two commands in your terminal:

```
$REACT_APP_API ="https://api-eu-west-2.hygraph.com/v2/cliu1be8i029q01t79zvo67uz/master"
```

```
$REACT_APP_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODY2NTE1NzAsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xpdTFiZThpMDI5cTAxdDc5enZvNjd1ei9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZWE2ZDRhMDUtNzFhZS00NzYzLTg0NTctNjhiNzliZTI0MGNjIiwianRpIjoiY2xpdTRzcDZoMDU2ZjAxdXAyb3QwNnlhOCJ9.Qua2qaO1ZcmJ2lO4k1vWAwwOIXFj2ct98oLXIQhYxkbvMH8Z5U0JXUNe2TQ2x19dG5C1cV9xDKIkMQ0Z3BKYQIwo4PGpk_8levqjLV_wxtNZ_CT-IXQiEtR2bYPbWdw6JdI592dKmEr5YbDU5xlD4j3yzMPKm5ZultLUGK4rg0HjM2_QStMb___e9gyJ223vcBbdZKXR7KuCeLSswGCbTc9gRzFR0FP2Y_RQLSXmXw6lcbexI1Tb2Teq6wvEV2aw0gPaSQjKoyzHFiZmXHA1g83AAIViCgQqohUNGG2zOaQNIDmfg7vU4LufMoNHLpT-lZCrMc8f6f8916Wy5jypg4NIsB-FFtnuZTKX53KKCs7CoZEvXCX-QPhEZwoTL3_pNq6SUJDSf1HjqE3gokpsNvVx7sMtM_36ZHcraSD8p4azQOk6g2rYpLzzAlaBAzt805YHWMUl_TK7lEuz2Nvck5O1rX4PBEJDapZ4-QKemhM1O1IxAYyPd1wwJ7rZCYAlf80zhHxnzuYuh1t934kPNKbTA_aXb29dALNqiEv7EUGpOAws8dWojqV3IISnwHtZ2lhs0drP2mcq5dklOYKzUm1n6lIRvR6aYcfDjzab0C_Cnuni-KKa5iINd1rTCoJtzaUHsHU-Wmyv8WfexR1h2PN0dovRlAS6DZ6FDpRcEoo"
```

Restart with: `npm run start`

## Technologies used

- [React](https://react.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Hygraph CMS](https://hygraph.com)
- [GraphQL](https://graphql.org)

## Packages & Additional Helpers

- [graphql-request](https://www.npmjs.com/package/graphql-request)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-topbar-progress-indicator](https://www.npmjs.com/package/react-topbar-progress-indicator)
- [FontAwesome](https://cdnjs.com/libraries/font-awesome)
- [Google Fonts](https://fonts.google.com/)

### Future improvements/ visions

- Introduce a Testing Framework [(React Jest)](https://jestjs.io/docs/tutorial-react)
- Split the Website into client-side and admin-side entities.
- Enable Admin Portal to Add a Blog Post
  - entruduce CRUD operations
- Create 'Leave a Comment' functionality
