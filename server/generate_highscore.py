from decimal import Decimal

from const import VARIANTS


async def generate_highscore(db):
    hs = []
    for variant in VARIANTS:
        # print(variant)
        d = "perfs.%s.gl.d" % variant
        r = "perfs.%s.gl.r" % variant
        filt = {d: {"$lt": 350}, "enabled": {"$ne": False}}

        scores = {}
        cursor = db.user.find(filt, sort=[(r, -1)], limit=10)
        async for doc in cursor:
            scores[doc["_id"]] = int(round(Decimal(doc["perfs"][variant]["gl"]["r"]), 0))

        hs.append({"_id": variant, "scores": scores})

    await db.highscore.drop()
    # bulk insert to highscore
    if len(hs) > 0:
        await db.highscore.insert_many(hs)
