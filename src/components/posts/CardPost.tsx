"use client";
import type { Media } from "@/interfaces/post";
import { Heart, MessageSquareMore } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import TruncateCardText from "../commons/TruncateCardText";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

type CardPostProps = {
  description: string;
  author: string;
  authorAvatar: string;
  date: string | Date;
  className?: string;
  images?: Media[];
};

// function fromNow(ms: number) {
//   const units = {
//     second: 1000,
//     minute: 60 * 1000,
//     hour: 60 * 60 * 1000,
//     day: 24 * 60 * 60 * 1000,
//   };

//   const unit = Object.keys(units).find((unit) => Math.abs(diffInMilliseconds) > units[unit]);
//   const amount = Math.floor(Math.abs(diffInMilliseconds) / units[unit]);

// }
export default function CardPost({
  description,
  author,
  authorAvatar,
  date,
  className,
  images,
}: CardPostProps) {
  return (
    <Card className={` bg-blue-300 dark:bg-xl-blue ${className}`}>
      <CardHeader className="flex flex-row gap-2 items-center space-y-0 pb-2">
        <Avatar>
          <AvatarImage src={authorAvatar} alt={`${author} avatar`} />
          <AvatarFallback>
            {author.split(" ")[0][0]}
            {author.split(" ")[1][0] || ""}
          </AvatarFallback>
        </Avatar>
        <div className="w-full  text-xs">
          <p>{author}</p>
          <p>{moment(new Date(date).toISOString()).fromNow()}</p>
        </div>
      </CardHeader>
      <CardContent className="mt-4">
        <TruncateCardText text={description} />
        {!!images?.length &&
          images.map((image, index) => (
            <div className="p-1" key={index}>
              <Image
                src={image.url}
                alt={image.type || "image-post"}
                width={400}
                height={300}
              />
            </div>
          ))}
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="hover:bg-slate-200 gap-2">
          <Heart /> Like
        </Button>
        <Button variant="ghost" className="hover:bg-slate-200 gap-2">
          <MessageSquareMore /> Comment
        </Button>
      </CardFooter>
    </Card>
  );
}
