import client from "../../client";

export default {
  Mutation: {
    uploadProductItem: async (
      _,
      {
        productName,
        optionName,
        firstOptionName,
        secondOptionName,
        thirdOptionName,
        additionalCost,
        inStock,
        sku,
      }
    ) => {
      try {
        const product = await client.product.findFirst({
          where: {
            productName,
          },
        });

        if (!product) {
          return {
            ok: false,
            error: "product does not exist",
          };
        }

        //Product Item name
        const productItem =
          product.productName +
          "," +
          firstOptionName +
          "," +
          secondOptionName +
          "," +
          thirdOptionName;

        const existProductItem = await client.productItem.findFirst({
          where: {
            productItem,
          },
        });

        if (existProductItem) {
          return {
            ok: false,
            error: "product item alread exist",
          };
        }

        // option 구분
        const optionObjs = optionName.match(/[^,]+/g);
        let color = "";
        let size = "";
        let extraOption = "";

        if (firstOptionName) {
          if (optionObjs[0] === "컬러") {
            color = firstOptionName;
          } else if (optionObjs[0] === "사이즈") {
            size = firstOptionName;
          } else {
            extraOption = firstOptionName;
          }
        }

        if (secondOptionName) {
          if (optionObjs[1] === "컬러") {
            color = secondOptionName;
          } else if (optionObjs[1] === "사이즈") {
            size = secondOptionName;
          } else {
            extraOption = secondOptionName;
          }
        }

        if (thirdOptionName) {
          if (optionObjs[2] === "컬러") {
            color = thirdOptionName;
          } else if (optionObjs[2] === "사이즈") {
            size = thirdOptionName;
          } else {
            extraOption = thirdOptionName;
          }
        }

        const newProductItem = await client.productItem.create({
          data: {
            productItem,
            product: {
              connect: {
                id: product.id,
              },
            },
            color,
            size,
            extraOption,
            additionalPrice: additionalCost,
            stockAmount: inStock,
            sku,
          },
        });

        if (!newProductItem) {
          return {
            ok: false,
            error: "upload failed",
          };
        }
        return {
          ok: true,
          error: "등록에 성공하셨습니다!",
        };
      } catch (e) {
        return { ok: false, error: "등록에 실패하였습니다" };
      }
    },
  },
};
