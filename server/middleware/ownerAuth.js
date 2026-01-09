export const ownerAuth = (req, res, next) => {
  const { u, p } = req.query;

  // Step 1: Agar URL param aaye
  if (u === process.env.OWNER_USERNAME && p === process.env.OWNER_PASSWORD) {
    // Step 2: Cookie set karo
    res.cookie("chhotupatel", "true", {
      httpOnly: true,
      secure: false, // 🔥 localhost ke liye FALSE
      sameSite: "lax", // 🔥 localhost ke liye
      maxAge: 1000 * 60 * 60 * 24,
    });

    req.isOwner = true;
    return next();
  }

  // Step 3: Agar cookie pehle se hai
  if (req.cookies?.chhotupatel === "true") {
    req.isOwner = true;
    return next();
  }

  // Step 4: Normal user
  req.isOwner = false;
  next();
};
