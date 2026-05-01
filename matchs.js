// =====================================
//   HORAIRE OFFICIEL – LIGUE 3 vs 3
//   Saison 2026 – Matches + Séries
// =====================================

const matchs = [

    // -------------------------
    // SEMAINE 1
    // -------------------------
    { semaine: 1, date: "2026-05-01", heure: "21:30", aréna: "Candiac", equipeA: 2, equipeB: 1, scoreA: null, scoreB: null },

    // -------------------------
    // SEMAINE 2
    // -------------------------
    { semaine: 2, date: "2026-05-08", heure: "21:30", aréna: "Candiac", equipeA: 1, equipeB: 3, scoreA: null, scoreB: null },

    // -------------------------
    // SEMAINE 3
    // -------------------------
    { semaine: 3, date: "2026-05-15", heure: "21:30", aréna: "Candiac", equipeA: 2, equipeB: 3, scoreA: null, scoreB: null },

    // -------------------------
    // SEMAINE 4
    // -------------------------
    { semaine: 4, date: "2026-05-22", heure: "21:30", aréna: "Candiac", equipeA: 1, equipeB: 2, scoreA: null, scoreB: null },

    // -------------------------
    // SEMAINE 5
    // -------------------------
    { semaine: 5, date: "2026-05-29", heure: "21:30", aréna: "Candiac", equipeA: 3, equipeB: 1, scoreA: null, scoreB: null },

    // -------------------------
    // SEMAINE 6
    // -------------------------
    { semaine: 6, date: "2026-06-05", heure: "21:30", aréna: "Candiac", equipeA: 3, equipeB: 2, scoreA: null, scoreB: null },

    // -------------------------
    // SEMAINE 7
    // -------------------------
    { semaine: 7, date: "2026-06-09", heure: "21:45", aréna: "Candiac", equipeA: 2, equipeB: 1, scoreA: null, scoreB: null },
    { semaine: 7, date: "2026-06-12", heure: "21:30", aréna: "Candiac", equipeA: 3, equipeB: 4, scoreA: null, scoreB: null },

    // -------------------------
    // SEMAINE 8
    // -------------------------
    { semaine: 8, date: "2026-06-16", heure: "21:45", aréna: "Candiac", equipeA: 4, equipeB: 2, scoreA: null, scoreB: null },
    { semaine: 8, date: "2026-06-19", heure: "21:30", aréna: "Candiac", equipeA: 1, equipeB: 3, scoreA: null, scoreB: null },

    // -------------------------
    // SEMAINE 9
    // -------------------------
    { semaine: 9, date: "2026-06-23", heure: "21:45", aréna: "Candiac", equipeA: 1, equipeB: 4, scoreA: null, scoreB: null },
    { semaine: 9, date: "2026-06-26", heure: "21:30", aréna: "Candiac", equipeA: 3, equipeB: 2, scoreA: null, scoreB: null },

    // -------------------------
    // SEMAINES 10 à 14 – RECLASSÉ
    // -------------------------
    { semaine: 10, date: "2026-06-30", heure: "21:45", aréna: "Candiac", equipeA: 1, equipeB: 4, type: "Reclassé", scoreA: null, scoreB: null },
    { semaine: 10, date: "2026-07-03", heure: "21:30", aréna: "Candiac", equipeA: 2, equipeB: 3, type: "Reclassé", scoreA: null, scoreB: null },

    { semaine: 11, date: "2026-07-07", heure: "21:45", aréna: "Candiac", equipeA: 1, equipeB: 4, type: "Reclassé", scoreA: null, scoreB: null },
    { semaine: 11, date: "2026-07-10", heure: "21:30", aréna: "Candiac", equipeA: 2, equipeB: 3, type: "Reclassé", scoreA: null, scoreB: null },

    { semaine: 12, date: "2026-07-14", heure: "21:45", aréna: "Candiac", equipeA: 3, equipeB: 2, type: "Reclassé", scoreA: null, scoreB: null },
    { semaine: 12, date: "2026-07-17", heure: "21:30", aréna: "Candiac", equipeA: 4, equipeB: 1, type: "Reclassé", scoreA: null, scoreB: null },

    { semaine: 13, date: "2026-07-21", heure: "21:45", aréna: "Candiac", equipeA: 3, equipeB: 2, type: "Reclassé", scoreA: null, scoreB: null },
    { semaine: 13, date: "2026-07-24", heure: "21:30", aréna: "Candiac", equipeA: 4, equipeB: 1, type: "Reclassé", scoreA: null, scoreB: null },

    { semaine: 14, date: "2026-07-28", heure: "21:45", aréna: "Candiac", equipeA: 1, equipeB: 4, type: "Reclassé", scoreA: null, scoreB: null },
    { semaine: 14, date: "2026-07-31", heure: "21:30", aréna: "Candiac", equipeA: 2, equipeB: 3, type: "Reclassé", scoreA: null, scoreB: null },

    // -------------------------
    // SÉRIES – SEMAINES 15 à 19
    // -------------------------
    { semaine: 15, type: "Séries", date: "2026-08-04", heure: "21:45", aréna: "Candiac", equipeA: "Gagnant 1", equipeB: "Gagnant 2", scoreA: null, scoreB: null },
    { semaine: 15, type: "Séries", date: "2026-08-07", heure: "21:30", aréna: "Candiac", equipeA: "Perdant 1", equipeB: "Perdant 2", scoreA: null, scoreB: null },

    { semaine: 16, type: "Séries", date: "2026-08-11", heure: "21:45", aréna: "Candiac", equipeA: "Gagnant 1", equipeB: "Gagnant 2", scoreA: null, scoreB: null },
    { semaine: 16, type: "Séries", date: "2026-08-14", heure: "21:30", aréna: "Candiac", equipeA: "Perdant 1", equipeB: "Perdant 2", scoreA: null, scoreB: null },

    { semaine: 17, type: "Séries", date: "2026-08-18", heure: "21:45", aréna: "Candiac", equipeA: "Perdant 2", equipeB: "Perdant 1", scoreA: null, scoreB: null },
    { semaine: 17, type: "Séries", date: "2026-08-21", heure: "21:30", aréna: "Candiac", equipeA: "Gagnant 2", equipeB: "Gagnant 1", scoreA: null, scoreB: null },

    { semaine: 18, type: "Séries", date: "2026-08-25", heure: "21:45", aréna: "Candiac", equipeA: "Perdant 2", equipeB: "Perdant 1", scoreA: null, scoreB: null },
    { semaine: 18, type: "Séries", date: "2026-08-28", heure: "21:30", aréna: "Candiac", equipeA: "Gagnant 2", equipeB: "Gagnant 1", scoreA: null, scoreB: null },

    { semaine: 19, type: "Séries", date: "2026-09-01", heure: "21:45", aréna: "Candiac", equipeA: "Gagnant 1", equipeB: "Gagnant 2", scoreA: null, scoreB: null },
    { semaine: 19, type: "Séries", date: "2026-09-04", heure: "21:30", aréna: "Candiac", equipeA: "Perdant 1", equipeB: "Perdant 2", scoreA: null, scoreB: null },
];
