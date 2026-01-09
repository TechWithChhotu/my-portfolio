export const checkOwnerStatus = (req, res) => {
  console.error("checkOwnerStatus Called");

  return res.json({
    isOwner: !!req.isOwner, // middleware se aata hai
  });
};
