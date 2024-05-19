
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginUser } from "@/app/actions/userActions";

export const NEXT_AUTH = 
    {
  

        providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label:'Email', type:"text",  },
          password: {label:'Password', type:"password",  }
        },
        async authorize(credentials:any) {
          // Add logic here to look up the user from the credentials supplied
         console.log("credentials",credentials);
    
           const user = await LoginUser(credentials?.email,credentials?.password);
    
          
           
    
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return {
              id:`${user.ID}`,
              email:user.Email,
              name:user.Name
            }
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
      session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.id = token.uid
          }
          return session
      }
    },
     pages:{
        signIn:"/login"
     }
    }
    
    
