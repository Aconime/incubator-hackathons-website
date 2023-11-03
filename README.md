# Incubator Hackathons

### Setup Instructions

- Install packages, npm goes brrrrrrr `npm i`
- Ask someone for the database url if you want production one, if no-one responds to you, then that's your fault, so for that, use your local database noob. Paste the databse string on the **.env** file.
- Go on Google Dev Console, surely you have an account there, create a new project, then app, etc, create 0Auth App, copy id and secrent paste them big boys onto your **.env** file.
- Run: `npx prisma db push` | Don't run this command if you're using production database, or there will be consequences 👀
- Finally, run `npm run dev`

If the project does not run, or there's an error, it's probably because I did this entire setup in 1 hour, and forgot to mention something. It's alright though, you'll figure it out.

> Eugen/Aconime
