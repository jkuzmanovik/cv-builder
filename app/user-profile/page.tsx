import { UserProfile } from "@clerk/nextjs"

const page = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
    <UserProfile />
    </div>
  )
}

export default page