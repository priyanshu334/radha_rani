import AddressForm from "@/components/AddressForm";
import ProfileForm from "@/components/ProfileForm";
import ProfileTabs from "@/components/ProfileTab";

export default function Home(){
    return <div>
        <ProfileTabs/>
        <AddressForm/>
    </div>
}