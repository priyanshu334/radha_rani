import ProfileForm from "@/components/ProfileForm";
import ProfileTabs from "@/components/ProfileTab";

export default function Home(){
    return <div className="mb-20">
        <ProfileTabs/>
        <ProfileForm/>
    </div>
}