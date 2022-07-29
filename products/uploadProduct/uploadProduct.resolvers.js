import client from "../../client";
import {
  processHashtags,
  processCateogry1,
  processCateogry2,
  processCateogry3,
} from "../products.utils";

export default {
  Mutation: {
    uploadProduct: async (
      _,
      {
        category1,
        category2,
        category3,
        productName,
        brand,
        originalPrice,
        discountPrice,
        firstOption,
        secondOption,
        thirdOption,
        thumbnail,
        productSliderImage,
        detailPage1,
        rawMaterial,
        madeIn,
        ussage,
        qualityStandard,
        hashtags,
      }
    ) => {
      try {
        // 브랜드가 있는지 없는지
        const existingBrand = await client.brand.findFirst({
          where: {
            brandName: brand,
          },
        });
        // 브랜드가 존재하지 않는다면
        if (!existingBrand) {
          return {
            ok: false,
            error: "there is no brand, please make brand first",
          };
        }

        hashtags = brand + "," + productName + "," + hashtags;

        let hashtagsObjs = [];
        if (hashtags) {
          hashtagsObjs = processHashtags(hashtags);
        }

        let category1Objs = [];
        if (category1) {
          category1Objs = processCateogry1(category1);
        }
        let category2Objs = [];
        if (category2) {
          category2Objs = processCateogry2(category2);
        }
        let category3Objs = [];
        if (category3) {
          category3Objs = processCateogry3(category3);
        }

        const existingProduct = await client.product.findFirst({
          where: {
            productName,
          },
        });

        if (existingProduct) {
          return {
            ok: false,
            error: "product name is already taken",
          };
        }

        const newProduct = await client.product.create({
          data: {
            productName,
            brand: {
              connect: {
                id: existingBrand.id,
              },
            },
            originalPrice,
            discountPrice,
            firstOption,
            secondOption,
            thirdOption,
            thumbnail,
            productSliderImage,
            detailPage1,
            rawMaterial,
            madeIn,
            ussage,
            qualityStandard,
            ...(category1Objs.length > 0 && {
              category1: {
                connectOrCreate: category1Objs,
              },
            }),
            ...(category2Objs.length > 0 && {
              category2: {
                connectOrCreate: category2Objs,
              },
            }),
            ...(category3Objs.length > 0 && {
              category3: {
                connectOrCreate: category3Objs,
              },
            }),
            ...(hashtagsObjs.length > 0 && {
              hashtags: {
                connectOrCreate: hashtagsObjs,
              },
            }),
          },
        });
        console.log(newProduct);

        if (!newProduct) {
          return {
            ok: false,
            error: "there is no new Product",
          };
        }
        return {
          ok: true,
          error: "등록에 성공하셨습니다!",
        };
      } catch (e) {
        return { ok: false, error: "Can't create products" };
      }
    },
  },
};
