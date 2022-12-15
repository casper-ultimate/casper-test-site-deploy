import { useRouter } from "next/router";

export const GetRoutes = ()=>{
    const router = useRouter()

    return {
        toHomePage: () => router.push("/home"),
        toSaboGame: (gamelink: string) => router.push(gamelink)
    }
} 