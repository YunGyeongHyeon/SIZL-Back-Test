import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";


export default {
    Mutation: {
        login: async (_, args,{request}) => {
            try {
                const { email, password } = args;
                const user = await prisma.user({email});
                if (user.password === password) {
                  const token = await generateToken(user.id);
                  return token;
                } else {
                  throw Error(
                    "해당 계정의 아이디 또는 패스워드가 일치하지 않습니다."
                  );
                }
              } catch (e) {
                console.log(e);
                return "";
              }
        }
    }
}