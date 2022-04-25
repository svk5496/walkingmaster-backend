import fs from "fs";
import bcrypt from "bcrypt";
import client from "../../client";
import { protectedResolver } from "../users.utils";
import { uploadToS3 } from "../../shared/shared.utils";

export default {
  Mutation: {
    editProfile: protectedResolver(
      async (
        _,
        {
          korName,
          nickName,
          username,
          email,
          password: newPassword,
          bio,
          avatar,
        },
        { loggedInUser }
      ) => {
        let avatarUrl = null;
        if (avatar) {
          avatarUrl = await uploadToS3(
            avatar,
            loggedInUser.id,
            "users/avatars"
          );
          //To save file in our server
          /*const { filename, createReadStream } = await avatar;
          const newFileName = `${loggedInUser}-${Date.now()}-${filename}`;
          const readStream = createReadStream();
          const writeStream = fs.createWriteStream(
            process.cwd() + "/uploads/" + newFileName
          );
          readStream.pipe(writeStream);
          avatarUrl = `http://localhost:4000/static/${newFileName}`;*/
        }
        let uglyPassword = null;
        if (newPassword) {
          uglyPassword = await bcrypt.hash(newPassword, 10);
        }
        const updatedUser = await client.user.update({
          where: {
            id: loggedInUser.id,
          },
          data: {
            korName,
            nickName,
            username,
            email,
            ...(uglyPassword && { password: uglyPassword }),
            ...(avatarUrl && { avatar: avatarUrl }),
            bio,
          },
        });
        if (updatedUser.id) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
            error: "Could not update profile.",
          };
        }
      }
    ),
  },
};
