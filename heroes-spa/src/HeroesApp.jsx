import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

//Now we can share the information within the provider in the entire App
//Either authenticated or non authenticated pages

export const HeroesApp = () => {
  return (
    <AuthProvider>
      
      <AppRouter />
    
    </AuthProvider>
  )
}
