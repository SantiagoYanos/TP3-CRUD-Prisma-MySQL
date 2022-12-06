const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function readCategories() {
  try {
    const obtained = prisma.category.findMany();
    return obtained;
  } catch (err) {
    console.log(err);
  }
}

function createNewCategory(newCategory) {
  try {
    const added = prisma.category.create({
      data: newCategory,
    });

    return added;
  } catch (err) {
    console.log(err);
  }
}

function updateCategory(idCategory, newData) {
  try {
    const updated = prisma.category.update({
      where: {
        id: idCategory,
      },
      data: newData,
    });

    return updated;
  } catch (err) {
    console.log(err);
  }
}

function deleteCategory(idCategory) {
  try {
    const deleted = prisma.category.delete({
      where: {
        id: idCategory,
      },
    });

    return deleted;
  } catch (err) {
    console.log(err);
  }
}

const getOneCategory = async (idCategory) => {
  try {
    const oneCategory = await prisma.category.findUnique({
      where: {
        id: idCategory,
      },
      include: {
        //posts: true
        posts: {
          select: {
            id: true,
            title: true,
            content: true,
            createdAt: true,
            published: true,
            categoryId: true,
          },
        },
      },
    });

    return oneCategory;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createNewCategory,
  readCategories,
  updateCategory,
  deleteCategory,
  getOneCategory,
};
