import { Profile, getProfile } from "@/utils/apis/users";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import { Link } from "react-router-dom";

const Index = () => {

  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getProfile();
      setProfile(result.payload);
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className="flex flex-col gap-4 items-center justify-center text-center w-full">
        <figure className="w-60 h-60">
          <img
            className="aspect-square rounded-full object-cover"
            src={profile?.profile_picture}
            alt={profile?.full_name}
          />
        </figure>
        <p className="font-bold text-2xl">{profile?.full_name}</p>
        <p>{profile?.email}</p>
        <p>{profile?.address}</p>
        <p>{profile?.phone_number}</p>
        <Button asChild>
          <Link to="/edit-profile">Edit Profile</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default Index;
