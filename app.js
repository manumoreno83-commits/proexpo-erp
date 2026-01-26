const app = {
    state: {
        currentView: 'dashboard',
        lang: 'en',
        theme: '#3b82f6',
        editMode: false,
        user: {
            name: 'Manuel Moreno',
            role: 'operations_director',
            avatar: null,
            email: 'manu@proexpo.com'
        },
        linkedGoogle: false,
        linkedLinkedIn: false,
        tariffs: [],
        quotes: [],
        vendors: [
            // --- Graphics / Materials ---
            {
                id: 1, name: "Pixartprinting", category: "Graphics", country: "Italy", city: "Venice", website: "https://pixartprinting.com", phone: "+39 041 570 1111", email: "info@pixartprinting.com", speciality: "Large format, Textiles, Vinyls",
                pricing: [
                    { item: "Vinyl Adhesive (Monomeric)", unit: "m2", cost: 12.50 },
                    { item: "PVC Banner (500gsm)", unit: "m2", cost: 15.00 },
                    { item: "Fabric (Backlit)", unit: "m2", cost: 28.00 },
                    { item: "Forex 3mm", unit: "m2", cost: 22.00 }
                ]
            },
            {
                id: 2, name: "FlyerAlarm", category: "Graphics", country: "Italy", city: "Milan", website: "https://flyeralarm.com", phone: "+39 02 3600 0000", email: "info@flyeralarm.it", speciality: "Offset, Digital, promotional items",
                pricing: [
                    { item: "Flyers A5 (1000pcs)", unit: "pack", cost: 45.00 },
                    { item: "Business Cards (500pcs)", unit: "pack", cost: 25.00 },
                    { item: "Roll-up 85x200", unit: "unit", cost: 35.00 }
                ]
            },
            {
                id: 3, name: "Tic Tac Stampa", category: "Graphics", country: "Italy", city: "Vicenza", website: "https://tictac.it", phone: "+39 0445 123456", email: "support@tictac.it", speciality: "Fabric printing, Flags",
                pricing: [
                    { item: "Flag 3m", unit: "unit", cost: 85.00 },
                    { item: "Textile Wall 3x3", unit: "unit", cost: 450.00 }
                ]
            },
            { id: 8, name: "Reflex", category: "AV", country: "Spain", city: "Barcelona", website: "reflex.es", phone: "", email: "", speciality: "LED Walls, Audio", pricing: [] }
        ],
        projects: [
            // --- ICE 2026 (19/01 - 21/01) ---
            { id: 101, client: 'RED-CORE', event: 'ICE 2026', setupDate: '2026-01-15', pm: 'Amir', status: 'Production', sqm: 502, stand: '3B20', provider: 'Neo' },
            { id: 102, client: 'ALTENAR', event: 'ICE 2026', setupDate: '2026-01-15', pm: 'Ana', status: 'Production', sqm: 178, stand: 'Irure', provider: 'Irure' },
            { id: 103, client: 'UPGAMING', event: 'ICE 2026', setupDate: '2026-01-15', pm: 'Amir', status: 'Production', sqm: 149, stand: 'Plus Expo', provider: 'Plus Expo' },
            { id: 104, client: 'BOOMING GAMES', event: 'ICE 2026', setupDate: '2026-01-15', pm: 'Wiktoria', status: 'Design', sqm: 54, stand: 'Intea', provider: 'Intea' },
            { id: 105, client: 'AGREEGAIN', event: 'ICE 2026', setupDate: '2026-01-15', pm: 'Ana', status: 'Proposal', sqm: 40, stand: 'Gualoga', provider: 'Gualoga' },
            { id: 106, client: 'TYCHEROS', event: 'ICE 2026', setupDate: '2026-01-15', pm: 'Estefi', status: 'Planning', sqm: 44, stand: 'Intea', provider: 'Intea' },

            // --- iGB 2026 (20/01 - 21/01) ---
            { id: 201, client: 'SAMURAI PARTNERS', event: 'iGB 2026', setupDate: '2026-01-17', pm: 'Wiktoria', status: 'Production', sqm: 30, stand: 'Plus Expo', provider: 'Plus Expo' },
            { id: 202, client: 'GROWE', event: 'iGB 2026', setupDate: '2026-01-17', pm: 'Ana', status: 'Design', sqm: 84, stand: 'Neo', provider: 'Neo' },

            // --- LINC 2026 (27/01 - 30/01) ---
            { id: 301, client: 'CARDIONOVUM', event: 'LINC 2026', setupDate: '2026-01-25', pm: 'Gema', status: 'Planning', sqm: 35, stand: 'Hencraft', provider: 'Hencraft' },
            { id: 302, client: 'BOSTON SCIENTIFIC', event: 'LINC 2026', setupDate: '2026-01-25', pm: 'Elena', status: 'Planning', sqm: 24, stand: 'Hencraft', provider: 'Hencraft' },

            // --- IMCAS 2026 (29/01 - 31/01) ---
            { id: 401, client: 'CROMA', event: 'IMCAS 2026', setupDate: '2026-01-27', pm: 'Amir', status: 'Planning', sqm: 96, stand: 'Plus Expo', provider: 'Plus Expo' },
            { id: 402, client: 'BIOSCIENCE', event: 'IMCAS 2026', setupDate: '2026-01-27', pm: 'Manu', status: 'Production', sqm: 150, stand: 'Plus Expo', provider: 'Plus Expo' },

            // --- ISE 2026 (03/02 - 06/02) ---
            { id: 501, client: 'BOSCH', event: 'ISE 2026', setupDate: '2026-01-30', pm: 'Elena', status: 'Production', sqm: 204, stand: 'Gualoga', provider: 'Gualoga' },
            { id: 502, client: 'SONANCE', event: 'ISE 2026', setupDate: '2026-01-30', pm: 'Miguel', status: 'Production', sqm: 200, stand: 'Gualoga', provider: 'Gualoga' },
            { id: 503, client: 'RICOH', event: 'ISE 2026', setupDate: '2026-01-30', pm: 'Marina', status: 'Design', sqm: 126, stand: 'Irure', provider: 'Irure' },
            { id: 504, client: 'BOSE', event: 'ISE 2026', setupDate: '2026-01-30', pm: 'Gema', status: 'Briefing', sqm: 120, stand: '3E190', provider: 'Reflex' },
            { id: 505, client: 'LD SYSTEMS', event: 'ISE 2026', setupDate: '2026-01-30', pm: 'Gema', status: 'Planning', sqm: 109, stand: '7B700', provider: 'Gualoga' },
            { id: 506, client: 'FOCAL&NAIM', event: 'ISE 2026', setupDate: '2026-01-30', pm: 'Amir', status: 'Proposal', sqm: 96, stand: '2G420', provider: 'Reflex' },
            { id: 507, client: 'LOEWE', event: 'ISE 2026', setupDate: '2026-01-30', pm: 'Miguel', status: 'Planning', sqm: 60, stand: 'Carpymun', provider: 'Carpymun' },
            { id: 508, client: 'PRODVX', event: 'ISE 2026', setupDate: '2026-01-30', pm: 'Miguel', status: 'New', sqm: 42, stand: 'Josep', provider: 'Josep' },
            { id: 509, client: 'RENKUS - HEINZ', event: 'ISE 2026', setupDate: '2026-01-30', pm: 'Marina', status: 'Planning', sqm: 15, stand: 'Reflex', provider: 'Reflex' },
            { id: 510, client: 'LIBERTY', event: 'ISE 2026', setupDate: '2026-01-30', pm: 'Irazu', status: 'Briefing', sqm: 24, stand: '5J600', provider: 'Team Brazil' },

            // --- WHX (Dubai) ---
            { id: 601, client: 'GPI', event: 'WHX Dubai', setupDate: '2026-02-07', pm: 'Marina', status: 'Planning', sqm: 24, stand: '-', provider: 'Ovation' },

            // --- BIOFACH ---
            { id: 701, client: 'NOBAZUL', event: 'BIOFACH 2026', setupDate: '2026-02-08', pm: 'Marina', status: 'Planning', sqm: 20, stand: '-', provider: 'Krystoff' },

            // --- MWC 2026 (02/03 - 05/03) ---
            { id: 801, client: 'CHINA MOBILE', event: 'MWC 2026', setupDate: '2026-02-25', pm: 'Amir', status: 'Design', sqm: 872, stand: '3N13', provider: 'Plus Expo' },
            { id: 802, client: 'VIETTEL', event: 'MWC 2026', setupDate: '2026-02-25', pm: 'Miguel', status: 'Production', sqm: 260, stand: 'Hall 4', provider: 'Plus Expo' },
            { id: 803, client: 'M&M (JAPAN PAV)', event: 'MWC 2026', setupDate: '2026-02-25', pm: 'Estefi', status: 'Planning', sqm: 162, stand: 'Hall 6', provider: 'Gualoga' },
            { id: 804, client: 'M&M (NICT)', event: 'MWC 2026', setupDate: '2026-02-25', pm: 'Estefi', status: 'Planning', sqm: 54, stand: 'Hall 6', provider: 'Gualoga' },
            { id: 805, client: 'AMARISOFT', event: 'MWC 2026', setupDate: '2026-02-25', pm: 'Elena', status: 'Proposal', sqm: 72, stand: 'Hall 5', provider: 'Gualoga' },
            { id: 806, client: 'SUPERMICRO', event: 'MWC 2026', setupDate: '2026-02-25', pm: 'Elena', status: 'Planning', sqm: 122, stand: 'Hall 2', provider: 'Gualoga' },
            { id: 807, client: 'SPECTRUM EFFECT', event: 'MWC 2026', setupDate: '2026-02-25', pm: 'Rocio', status: 'Planning', sqm: 18, stand: 'Hall 2', provider: 'Backwood' },
            { id: 808, client: 'ARRCUS', event: 'MWC 2026', setupDate: '2026-02-25', pm: 'Ana', status: 'New', sqm: 86, stand: 'Hall 2', provider: 'Gualoga' },
            { id: 809, client: 'REAILIZE', event: 'MWC 2026', setupDate: '2026-02-25', pm: 'Ana', status: 'New', sqm: 50, stand: 'Hall 2', provider: 'Gualoga' },

            // --- EXPODENTAL 2026 (11/03 - 13/03) ---
            { id: 820, client: 'ENVISTA', event: 'EXPODENTAL 2026', setupDate: '2026-03-08', pm: 'Gema', status: 'Planning', sqm: 135, stand: 'Gualoga', provider: 'Gualoga' },
            { id: 821, client: 'PLANMECA', event: 'EXPODENTAL 2026', setupDate: '2026-03-08', pm: 'Gema', status: 'Planning', sqm: 80, stand: 'Gualoga', provider: 'Gualoga' }, // SQM inferred

            // --- EAU 2026 (13/03 - 16/03) (London) ---
            { id: 830, client: 'BAYER + BL + MR', event: 'EAU 2026', setupDate: '2026-03-10', pm: 'Elena', status: 'Production', sqm: 181, stand: 'Plus Expo', provider: 'Plus Expo' },
            { id: 831, client: 'LABORIE', event: 'EAU 2026', setupDate: '2026-03-10', pm: 'Elena', status: 'Design', sqm: 40, stand: 'Hencraft', provider: 'Hencraft' },
            { id: 832, client: 'LENUS PHARMA', event: 'EAU 2026', setupDate: '2026-03-10', pm: 'Rocio', status: 'New', sqm: 18, stand: 'Hencraft', provider: 'Hencraft' },
            { id: 833, client: 'COLOPLAST', event: 'EAU 2026', setupDate: '2026-03-10', pm: 'Marina', status: 'Planning', sqm: 80, stand: 'Plus Expo', provider: 'Plus Expo' },

            // --- ESCMID 2026 (17/04 - 21/04) ---
            { id: 840, client: 'QIAGEN', event: 'ESCMID 2026', setupDate: '2026-04-14', pm: 'Gema', status: 'Planning', sqm: 160, stand: 'Gualoga', provider: 'Gualoga' },

            // --- Osteology 2026 (23/04 - 25/04) ---
            { id: 850, client: 'NOBEL', event: 'Osteology 2026', setupDate: '2026-04-20', pm: 'Gema', status: 'Quote', sqm: 40, stand: 'Hendcraft', provider: 'Hendcraft' },

            // --- Equiplast 2026 (02/06 - 05/06) ---
            { id: 860, client: 'AMPACET', event: 'Equiplast 2026', setupDate: '2026-05-30', pm: 'Gema', status: 'New', sqm: 25, stand: '-', provider: 'Pending' },

            // --- Future / 2025 Retained ---
            { id: 901, client: 'BAYER', event: 'EuroPCR 2026', setupDate: '2026-05-18', pm: 'Elena', status: 'Briefing', sqm: 135, stand: '-', provider: 'Pending' },
            { id: 902, client: 'ENVISTA', event: 'IDS 2025', setupDate: '2025-03-23', pm: 'Gema', status: 'Finished', sqm: 181, stand: '-', provider: '-' },
            { id: 903, client: 'PLANMECA', event: 'IDS 2025', setupDate: '2025-03-23', pm: 'Gema', status: 'Finished', sqm: 80, stand: '-', provider: '-' },
            { id: 904, client: 'QIAGEN', event: 'ECCMID 2026', setupDate: '2026-04-15', pm: 'Elena', status: 'Proposal', sqm: 160, stand: '-', provider: 'Pending' },
            { id: 950, client: 'DAIKIN', event: 'CHILLVENTA 2026', setupDate: '2026-10-09', pm: 'Manu', status: 'Planning', sqm: 120, stand: 'Hall 4', provider: 'Gualoga' },

            // --- Historical Data (2022-2025) for Client Tracking ---
            { id: 1001, client: 'RED-CORE', event: 'ICE 2025', setupDate: '2025-01-17', pm: 'Amir', status: 'Finished', sqm: 450, stand: '3B20', provider: 'Neo' },
            { id: 1002, client: 'ALTENAR', event: 'ICE 2025', setupDate: '2025-01-17', pm: 'Ana', status: 'Finished', sqm: 160, stand: 'Irure', provider: 'Irure' },
            { id: 1003, client: 'UPGAMING', event: 'ICE 2025', setupDate: '2025-01-17', pm: 'Amir', status: 'Finished', sqm: 140, stand: 'Plus Expo', provider: 'Plus Expo' },
            { id: 1004, client: 'CARDIONOVUM', event: 'LINC 2025', setupDate: '2025-01-28', pm: 'Gema', status: 'Finished', sqm: 35, stand: 'Hencraft', provider: 'Hencraft' },
            { id: 1005, client: 'BOSTON SCIENTIFIC', event: 'LINC 2025', setupDate: '2025-01-28', pm: 'Elena', status: 'Finished', sqm: 24, stand: 'Hencraft', provider: 'Hencraft' },
            { id: 1006, client: 'CROMA', event: 'IMCAS 2025', setupDate: '2025-01-30', pm: 'Amir', status: 'Finished', sqm: 96, stand: 'Plus Expo', provider: 'Plus Expo' },
            { id: 1007, client: 'BIOSCIENCE', event: 'IMCAS 2025', setupDate: '2025-01-30', pm: 'Manu', status: 'Finished', sqm: 150, stand: 'Plus Expo', provider: 'Plus Expo' },
            { id: 1008, client: 'BOSCH', event: 'ISE 2025', setupDate: '2025-02-04', pm: 'Elena', status: 'Finished', sqm: 200, stand: 'Gualoga', provider: 'Gualoga' },
            { id: 1009, client: 'SONANCE', event: 'ISE 2025', setupDate: '2025-02-04', pm: 'Miguel', status: 'Finished', sqm: 180, stand: 'Gualoga', provider: 'Gualoga' },
            { id: 1010, client: 'CHINA MOBILE', event: 'MWC 2025', setupDate: '2025-03-03', pm: 'Amir', status: 'Finished', sqm: 800, stand: '3N13', provider: 'Plus Expo' },
            { id: 1011, client: 'VIETTEL', event: 'MWC 2025', setupDate: '2025-03-03', pm: 'Miguel', status: 'Finished', sqm: 260, stand: 'Hall 4', provider: 'Plus Expo' },
            { id: 1012, client: 'ENVISTA', event: 'EXPODENTAL 2024', setupDate: '2024-03-14', pm: 'Gema', status: 'Finished', sqm: 135, stand: 'Gualoga', provider: 'Gualoga' },
            { id: 1013, client: 'PLANMECA', event: 'EXPODENTAL 2024', setupDate: '2024-03-14', pm: 'Gema', status: 'Finished', sqm: 80, stand: 'Gualoga', provider: 'Gualoga' },
            { id: 1014, client: 'BAYER', event: 'EuroPCR 2024', setupDate: '2024-05-21', pm: 'Elena', status: 'Finished', sqm: 135, stand: '-', provider: 'Plus Expo' },
            { id: 1015, client: 'QIAGEN', event: 'ECCMID 2024', setupDate: '2024-04-27', pm: 'Gema', status: 'Finished', sqm: 160, stand: 'Gualoga', provider: 'Gualoga' },
            { id: 1016, client: 'RED-CORE', event: 'ICE 2024', setupDate: '2024-02-06', pm: 'Amir', status: 'Finished', sqm: 400, stand: 'N3', provider: 'Neo' },
            { id: 1017, client: 'RED-CORE', event: 'ICE 2023', setupDate: '2023-02-07', pm: 'Amir', status: 'Finished', sqm: 350, stand: 'N3', provider: 'Neo' }
        ],
        currentQuote: {
            id: '',
            client: '',
            event: '',
            date: '',
            vat: 0.21,
            discountValue: 0,
            discountType: 'percent', // 'percent' or 'fixed'
            aiDescription: '',
            sectionMargins: {
                'Construction': 0.35,
                'Electrical': 0.35,
                'Graphics': 0.35,
                'Audiovisual': 0.35,
                'Furniture': 0.35,
                'Logistics': 0.35,
                'Venue Services': 0.35,
                'Other': 0.35
            },
            items: [],
            projectId: '',
            refPdf: null
        },
        showDatabase: [
            // --- 2026 (Chronological Order) ---
            { name: 'ICE 2026', setup: '2026-01-16', start: '2026-01-19', venue: 'Fira BCN Gran Via', country: 'Spain', venueMap: 'https://www.google.com/maps/place/Fira+Barcelona+Gran+Via/@41.354432,2.12695,15z', floorplan: 'https://www.icegaming.com/', manual: 'https://www.icegaming.com/' },
            { name: 'iGB 2026', setup: '2026-01-19', start: '2026-01-20', venue: 'Fira BCN Gran Via', country: 'Spain', venueMap: 'https://www.google.com/maps/place/Fira+Barcelona+Gran+Via/@41.354432,2.12695,15z', floorplan: 'https://www.igbaffiliate.com/', manual: 'https://www.igbaffiliate.com/' },
            { name: 'LINC 2026', setup: '2026-01-25', start: '2026-01-27', venue: 'Leipzig Messe', country: 'Germany', venueMap: 'https://www.google.com/maps/place/Leipziger+Messe/@51.396568,12.403061,15z', floorplan: 'https://www.leipzig-interventional-course.com/', manual: 'https://www.leipzig-interventional-course.com/' },
            { name: 'IMCAS 2026', setup: '2026-01-27', start: '2026-01-29', venue: 'Palais des Congrès Paris', country: 'France', venueMap: 'https://www.google.com/maps/place/Palais+des+Congr%C3%A8s+de+Paris/@48.878431,2.283124,15z', floorplan: 'https://www.imcas.com/en/attend/imcas-world-congress-2026', manual: 'https://www.imcas.com/en/attend/imcas-world-congress-2026' },
            { name: 'ISE 2026', setup: '2026-02-01', start: '2026-02-03', venue: 'Fira BCN Gran Via', country: 'Spain', venueMap: 'https://www.google.com/maps/place/Fira+Barcelona+Gran+Via/@41.354432,2.12695,15z', floorplan: 'https://ise2026.mapyourshow.com/8_0/floorplan/', manual: 'https://www.iseurope.org/exhibitor-manual' },
            { name: 'WHX 2026', setup: '2026-02-07', start: '2026-02-09', venue: 'Dubai World Trade Centre', country: 'UAE', venueMap: 'https://www.google.com/maps/place/Dubai+World+Trade+Centre/@25.222226,55.289297,15z', floorplan: 'https://www.worldhospitalitycongress.com/', manual: 'https://www.worldhospitalitycongress.com/' },
            { name: 'BIOFACH 2026', setup: '2026-02-08', start: '2026-02-10', venue: 'Messe Nuremberg', country: 'Germany', venueMap: 'https://www.google.com/maps/place/Messezentrum+N%C3%BCrnberg/@49.418281,11.115893,15z', floorplan: 'https://www.biofach.de/en', manual: 'https://www.biofach.de/en' },
            { name: 'ISSM/ESSM 2026', setup: '2026-02-23', start: '2026-02-25', venue: 'Porto Congress Centre', country: 'Portugal', venueMap: 'https://www.google.com/maps/place/Centro+de+Congressos+do+Porto/@41.162142,-8.682881,15z', floorplan: 'https://www.issm.info/congress-2026', manual: 'https://www.issm.info/' },
            { name: 'MWC 2026', setup: '2026-02-28', start: '2026-03-02', venue: 'Fira BCN Gran Via', country: 'Spain', venueMap: 'https://www.google.com/maps/place/Fira+Barcelona+Gran+Via/@41.354432,2.12695,15z', floorplan: 'https://www.mwcbarcelona.com/', manual: 'https://www.mwcbarcelona.com/' },
            { name: 'EXPODENTAL 2026', setup: '2026-03-09', start: '2026-03-11', venue: 'IFEMA Madrid', country: 'Spain', venueMap: 'https://www.google.com/maps/place/IFEMA+MADRID/@40.466023,-3.617462,15z', floorplan: 'https://www.ifema.es/expodental', manual: 'https://www.ifema.es/expodental' },
            { name: 'EAU 2026', setup: '2026-03-11', start: '2026-03-13', venue: 'ExCeL London', country: 'UK', venueMap: 'https://www.google.com/maps/place/ExCeL+London/@51.507851,0.029864,15z', floorplan: 'https://uroweb.org/congress/eau26', manual: 'https://uroweb.org/congress/eau26' },
            { name: 'Osteology 2026', setup: '2026-04-21', start: '2026-04-23', venue: 'Messe Wien (Vienna)', country: 'Austria', venueMap: 'https://www.google.com/maps/place/Messe+Wien/@48.217291,16.405781,15z', floorplan: 'https://www.osteology-vienna.org/', manual: 'https://www.osteology.org/' },
            { name: 'ESCMID 2026', setup: '2026-04-15', start: '2026-04-17', venue: 'Messe München', country: 'Germany', venueMap: 'https://www.google.com/maps/place/Messe+M%C3%BCnchen/@48.135431,11.697812,15z', floorplan: 'https://www.escmid.org/eccmid/', manual: 'https://www.escmid.org/eccmid/' },
            { name: 'Equiplast 2026', setup: '2026-05-31', start: '2026-06-02', venue: 'Fira BCN Gran Via', country: 'Spain', venueMap: 'https://www.google.com/maps/place/Fira+Barcelona+Gran+Via/@41.354432,2.12695,15z', floorplan: 'https://www.equiplast.com/en/', manual: 'https://www.equiplast.com/en/' },
            { name: 'CHILLVENTA 2026', setup: '2026-10-09', start: '2026-10-13', venue: 'Messe Nuremberg', country: 'Germany', venueMap: 'https://www.google.com/maps/place/Messezentrum+N%C3%BCrnberg/@49.418281,11.115893,15z', floorplan: 'https://www.chillventa.de/en', manual: 'https://www.chillventa.de/en' },

            // --- 2025 ---
            { name: 'ICE 2025', setup: '2025-01-17', start: '2025-01-20', venue: 'Barcelona', map: 'https://www.google.com/maps/place/Fira+Barcelona+Gran+Via/@41.354432,2.12695,15z/data=!4m2!3m1!1s0x0:0x511943831818318?sa=X&ved=2ahUKEwjY6_qQ-p-FAxU_UaQEHW6iA64Q_BJ6BAgSEAA', manual: '#' },
            { name: 'iGB Affiliate 2025', setup: '2025-01-21', start: '2025-01-21', venue: 'Barcelona', map: 'https://www.google.com/maps/place/Fira+Barcelona+Gran+Via/@41.354432,2.12695,15z/data=!4m2!3m1!1s0x0:0x511943831818318?sa=X&ved=2ahUKEwjY6_qQ-p-FAxU_UaQEHW6iA64Q_BJ6BAgSEAA', manual: '#' },
            { name: 'LINC 2025', setup: '2025-01-28', start: '2025-01-28', venue: 'Leipzig', map: '#', manual: '#' },
            { name: 'IMCAS 2025', setup: '2025-01-30', start: '2025-01-30', venue: 'Paris', map: '#', manual: '#' },
            { name: 'ISE 2025', setup: '2025-02-04', start: '2025-02-04', venue: 'Barcelona', map: 'https://www.google.com/maps/place/Fira+Barcelona+Gran+Via/@41.354432,2.12695,15z/data=!4m2!3m1!1s0x0:0x511943831818318?sa=X&ved=2ahUKEwjY6_qQ-p-FAxU_UaQEHW6iA64Q_BJ6BAgSEAA', manual: '#' },
            { name: 'BIOFACH 2025', setup: '2025-02-11', start: '2025-02-11', venue: 'Nuremberg', map: '#', manual: '#' },
            { name: 'MWC 2025', setup: '2025-03-03', start: '2025-03-03', venue: 'Barcelona', map: 'https://www.google.com/maps/place/Fira+Barcelona+Gran+Via/@41.354432,2.12695,15z/data=!4m2!3m1!1s0x0:0x511943831818318?sa=X&ved=2ahUKEwjY6_qQ-p-FAxU_UaQEHW6iA64Q_BJ6BAgSEAA', manual: '#' },
            { name: 'LOGIMAT 2025', setup: '2025-03-11', start: '2025-03-11', venue: 'Stuttgart', map: '#', manual: '#' },
            { name: 'ISH 2025', setup: '2025-03-17', start: '2025-03-17', venue: 'Frankfurt', map: '#', manual: '#' },
            { name: 'IDS 2025', setup: '2025-03-25', start: '2025-03-25', venue: 'Cologne', map: '#', manual: '#' },
            { name: 'AMWC 2025', setup: '2025-03-27', start: '2025-03-27', venue: 'Monaco', map: '#', manual: '#' },
            { name: 'EAU 2025', setup: '2025-03-21', start: '2025-03-21', venue: 'Madrid', map: '#', manual: '#' },
            { name: 'BAUMA 2025', setup: '2025-04-07', start: '2025-04-07', venue: 'Munich', map: '#', manual: '#' },
            { name: 'GAT EXPO 2025', setup: '2025-04-29', start: '2025-04-29', venue: 'Cartagena', map: '#', manual: '#' },
            { name: 'SEAFOOD 2025', setup: '2025-05-06', start: '2025-05-06', venue: 'Barcelona', map: 'https://www.google.com/maps/place/Fira+Barcelona+Gran+Via/@41.354432,2.12695,15z/data=!4m2!3m1!1s0x0:0x511943831818318?sa=X&ved=2ahUKEwjY6_qQ-p-FAxU_UaQEHW6iA64Q_BJ6BAgSEAA', manual: '#' },
            { name: 'EUROPERIO 2025', setup: '2025-05-20', start: '2025-05-20', venue: 'Vienna', map: '#', manual: '#' },
            { name: 'EUROPCR 2025', setup: '2025-05-20', start: '2025-05-20', venue: 'Paris', map: '#', manual: '#' },
            { name: 'VITAFOODS 2025', setup: '2025-05-20', start: '2025-05-20', venue: 'Barcelona', map: 'https://www.google.com/maps/place/Fira+Barcelona+Gran+Via/@41.354432,2.12695,15z/data=!4m2!3m1!1s0x0:0x511943831818318?sa=X&ved=2ahUKEwjY6_qQ-p-FAxU_UaQEHW6iA64Q_BJ6BAgSEAA', manual: '#' },
            { name: 'ISBT 2025', setup: '2025-05-31', start: '2025-05-31', venue: 'Milan', map: '#', manual: '#' },
            { name: 'CineEurope 2025', setup: '2025-06-16', start: '2025-06-16', venue: 'Barcelona', map: 'https://www.google.com/maps/place/CCIB/@41.4093,2.21735,15z', manual: '#' },
            { name: 'IGB Live 2025', setup: '2025-07-02', start: '2025-07-02', venue: 'London', map: '#', manual: '#' },
            { name: 'IBC 2025', setup: '2025-09-12', start: '2025-09-12', venue: 'Amsterdam', map: '#', manual: '#' },
            { name: 'ESCRS 2025', setup: '2025-09-12', start: '2025-09-12', venue: 'Copenhagen', map: '#', manual: '#' },
            { name: 'CPHI 2025', setup: '2025-10-28', start: '2025-10-28', venue: 'Frankfurt', map: '#', manual: '#' },
            { name: 'SIGMA 2025', setup: '2025-11-03', start: '2025-11-03', venue: 'Rome', map: '#', manual: '#' }
        ]
    },

    translations: {
        en: {
            dashboard: 'Dashboard',
            projects: 'Projects',
            tradeshows: 'Tradeshows',
            clients: 'Clients',
            tariffs: 'Tariffs',
            new_quote: 'Quotations',
            ai_center: 'AI Center',
            vendors: 'Vendors',
            settings: 'Settings',
            welcome: 'Welcome to PRO EXPO',
            total_quotes: 'Total Quotes',
            default_margin: 'Default Margin',
            start_quote: 'Start New Quote',
            active_projects: 'Active Projects',
            client: 'Client',
            event: 'Event',
            pm: 'PM',
            setup_date: 'Setup Date',
            stand: 'Stand',
            provider: 'Provider',
            deadlines: 'Deadlines Checklist',
            quote_details: 'Quote Details',
            items: 'Items (English)',
            summary: 'Summary',
            subtotal: 'Subtotal',
            total: 'Total',
            print_en: 'Export PDF (English)',
            print_es: 'Export PDF (Spanish)',
            search: 'Search items...',
            cost: 'Cost',
            price: 'Price',
            qty: 'Qty',
            unit: 'Unit',
            description: 'Description',
            add_tariff: 'Add From Tariff',
            protocols: 'PM Protocols',
            regulations: 'Show Regulations',
            workflow: 'Workflow',
            open_protocol: 'Open Full Protocol (GDocs)',
            standard_workflow: 'Standard Project Workflow',
            design: 'DISEÑO',
            production: 'PRODUCCIÓN',
            logistics: 'LOGÍSTICA',
            setup: 'MONTAJE',
            furniture: 'FURNITURE',
            av: 'AUDIOVISUAL',
            graphics: 'GRAPHICS',
            construction: 'CONSTRUCTION',
            electrical: 'ELECTRICAL',
            venue_services: 'VENUE SERVICES',
            other: 'OTHER',
            silla_standard: 'Standard Chair',
            mesa_120x80: 'Table 120x80',
            pantalla_led_55: 'LED Screen 55"',
            cable_hdmi_5m: 'HDMI Cable 5m',
            urgent_deadlines: 'Urgent Deadlines',
            view_all_projects: 'View All Projects',
            pending_tasks: 'Pending Tasks',
            no_urgent_deadlines: 'No urgent deadlines',
            overdue: 'OVERDUE',
            due_soon: 'DUE SOON',
            ce_document: 'CE - Cost Estimation',
            real_cost: 'Real Cost',
            quote_price: 'Quote Price',
            gross_profit: 'Gross Profit',
            margin_perc: 'Margin %',
            internal_budget: 'Internal Budget / CE',
            new_task: 'New Task',
            task_name: 'Task Description',
            deadline: 'Deadline',
            select_project: 'Select Project',
            senior_pm: 'Senior Project Manager',
            operations_director: 'Operations Director',
            quotes: 'Quote'
        },
        es: {
            dashboard: 'Panel de Control',
            projects: 'Proyectos',
            tradeshows: 'Ferias',
            clients: 'Clientes',
            tariffs: 'Tarifas',
            new_quote: 'Presupuestos',
            ai_center: 'Centro IA',
            vendors: 'Proveedores',
            settings: 'Ajustes',
            welcome: 'Bienvenido a PRO EXPO',
            total_quotes: 'Total Presupuestos',
            default_margin: 'Margen Predeterminado',
            start_quote: 'Iniciar Presupuesto',
            active_projects: 'Proyectos Activos',
            client: 'Cliente',
            event: 'Evento',
            pm: 'Gestor',
            setup_date: 'Fecha Montaje',
            stand: 'Stand',
            provider: 'Proveedor',
            deadlines: 'Lista de Plazos',
            quote_details: 'Detalles del Presupuesto',
            items: 'Artículos',
            summary: 'Resumen',
            subtotal: 'Subtotal',
            total: 'Total',
            print_en: 'Exportar PDF (Inglés)',
            print_es: 'Exportar PDF (Español)',
            search: 'Buscar artículos...',
            cost: 'Coste',
            price: 'Precio',
            qty: 'Cant.',
            unit: 'Unidad',
            description: 'Descripción',
            add_tariff: 'Añadir de Tarifa',
            protocols: 'Protocolos PM',
            regulations: 'Regulaciones',
            workflow: 'Flujo de Trabajo',
            open_protocol: 'Abrir Protocolo Completo (GDocs)',
            standard_workflow: 'Flujo de Trabajo Estándar',
            design: 'DISEÑO',
            production: 'PRODUCCIÓN',
            logistics: 'LOGÍSTICA',
            setup: 'MONTAJE',
            furniture: 'MOBILIARIO',
            av: 'AUDIOVISUAL',
            graphics: 'GRÁFICA',
            construction: 'CONSTRUCCIÓN',
            electrical: 'ELECTRICIDAD',
            venue_services: 'SERVICIOS DE RECINTO',
            other: 'OTROS',
            silla_standard: 'Silla Estándar',
            mesa_120x80: 'Mesa 120x80',
            pantalla_led_55: 'Pantalla LED 55"',
            cable_hdmi_5m: 'Cable HDMI 5m',
            urgent_deadlines: 'Plazos Urgentes',
            view_all_projects: 'Ver Todos los Proyectos',
            pending_tasks: 'Tareas Pendientes',
            no_urgent_deadlines: 'Sin plazos urgentes',
            overdue: 'VENCIDO',
            due_soon: 'VENCE PRONTO',
            ce_document: 'CE - Estimación de Costes',
            real_cost: 'Coste Real',
            quote_price: 'Precio Venta',
            gross_profit: 'Beneficio Bruto',
            margin_perc: '% Margen',
            internal_budget: 'Presupuesto Interno / CE',
            new_task: 'Nueva Tarea',
            task_name: 'Descripción Tarea',
            deadline: 'Plazo',
            select_project: 'Seleccionar Proyecto',
            senior_pm: 'Gestor de Proyectos Senior',
            operations_director: 'Director de Operaciones',
            quotes: 'Presupuesto'
        }
    },

    t: (key) => {
        return app.translations[app.state.lang][key] || key;
    },

    setLanguage: (lang) => {
        app.state.lang = lang;
        app.updateUILanguage();
        app.navigate(app.state.currentView);
    },

    updateUILanguage: () => {
        // Nav items
        document.querySelectorAll('.nav-item').forEach(btn => {
            const span = btn.querySelector('.nav-text');
            if (span) {
                const keyMap = {
                    'nav-dashboard': 'dashboard',
                    'nav-projects': 'projects',
                    'nav-tradeshows': 'tradeshows',
                    'nav-clients': 'clients',
                    'nav-vendors': 'vendors',
                    'nav-quotation': 'new_quote',
                    'nav-knowledge': 'ai_center',
                    'nav-settings': 'settings'
                };
                const key = keyMap[btn.id];
                if (key) span.innerText = app.t(key);
            }
        });

        // Sidebar Profile
        const { user } = app.state;
        if (document.getElementById('sidebar-name')) document.getElementById('sidebar-name').innerText = user.name;
        if (document.getElementById('sidebar-role')) document.getElementById('sidebar-role').innerText = app.t(user.role);
        if (document.getElementById('sidebar-avatar')) {
            const avatar = document.getElementById('sidebar-avatar');
            if (user.avatar) {
                avatar.style.backgroundImage = `url(${user.avatar})`;
                avatar.style.backgroundSize = 'cover';
                avatar.style.border = '2px solid var(--accent)';
                avatar.innerText = '';
            } else {
                avatar.style.backgroundImage = 'none';
                avatar.innerText = user.name ? user.name.charAt(0) : 'U';
            }
        }

        // Top bar
        document.getElementById('new-quote-btn').innerHTML = `<i data-lucide="plus"></i> ${app.t('quotes')}`;
        document.getElementById('add-task-btn').innerHTML = `<i data-lucide="check-square"></i> ${app.t('new_task')}`;

        // Ensure New Project button is also updated if it exists
        const newProjectBtn = document.getElementById('new-project-btn-top');
        if (newProjectBtn) newProjectBtn.innerHTML = `<i data-lucide="plus-circle"></i> Project`;

        const titles = {
            'dashboard': 'dashboard',
            'projects': 'projects',
            'tradeshows': 'tradeshows',
            'clients': 'clients',
            'vendors': 'vendors',
            'quotation': 'new_quote',
            'knowledge': 'ai_center',
            'settings': 'settings'
        };
        const titleKey = titles[app.state.currentView];
        if (titleKey) document.getElementById('page-title').innerText = app.t(titleKey);

        lucide.createIcons();
    },

    toggleProjectStatus: (id) => {
        const p = app.state.projects.find(x => x.id === id);
        if (p) {
            p.status = p.status === 'Finished' ? 'Active' : 'Finished';
            app.saveProjects();
            app.renderProjects();
        }
    },

    toggleProjectFold: (id) => {
        const p = app.state.projects.find(x => x.id === id);
        if (p) {
            p.folded = !p.folded;
            app.saveProjects();
            // Don't re-render everything to keep animations smooth if possible, 
            // but for simplicity we re-render or just toggle display.
            // Re-rendering is safer for state sync.
            app.renderProjects();
        }
    },

    toggleEditMode: () => {
        app.state.editMode = !app.state.editMode;
        // Visual feedback
        const btn = document.querySelector('button[onclick="app.toggleEditMode()"] i');
        if (btn) {
            btn.style.color = app.state.editMode ? 'var(--accent)' : 'var(--text-secondary)';
        }

        // Refresh current view if needed to show edit controls
        // For now, we'll just log it or maybe re-render if we had edit controls
        console.log('Edit mode:', app.state.editMode);

        // If we are in Knowledge Center > Prompts, we might want to re-render to show edit inputs?
        // But for this initial step, we just toggle the state and icon color.
        if (app.state.currentView === 'knowledge') {
            app.renderKnowledgeCenter(app.state.currentKnowledgeTab || 'workflow');
        }
    },


    init: () => {
        // Init Theme
        const storedTheme = localStorage.getItem('pe_theme');
        if (storedTheme) {
            app.state.theme = storedTheme;
            document.documentElement.style.setProperty('--accent', app.state.theme);
        }

        // Firebase Auth Listener
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                console.log('User logged in:', user.email);
                app.state.user.email = user.email;
                app.state.user.name = user.displayName || user.email.split('@')[0];
                app.state.user.avatar = user.photoURL;
                app.state.user.uid = user.uid;

                // Show core UI
                document.querySelector('.sidebar').style.display = 'flex';
                document.querySelector('.top-bar').style.display = 'flex';

                await app.loadData();
                app.buildUI();
            } else {
                console.log('No user logged in - showing login');
                app.renderLogin();
            }
        });
    },

    buildUI: () => {
        // Inject Task Modal
        if (!document.getElementById('task-modal')) {
            const taskModal = document.createElement('dialog');
            taskModal.id = 'task-modal';
            taskModal.className = 'glass';
            taskModal.style = 'margin:auto; border-radius:16px; border:1px solid var(--glass-border); padding:0; width:400px; max-width:90vw; background:var(--bg-dark); color:white;';
            taskModal.innerHTML = `
                <form onsubmit="app.handleTaskSubmit(event)" style="padding:24px;">
                    <h3 style="margin-bottom:20px;">${app.t('new_task')}</h3>
                    <div style="display:grid; gap:16px;">
                        <div>
                            <label style="display:block; margin-bottom:6px; font-size:0.9rem; color:var(--text-secondary)">${app.t('select_project')}</label>
                            <select id="task-project-id" required style="width:100%; padding:10px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:8px; color:white;">
                                <option value="">-- Choose --</option>
                                ${app.state.projects.map(p => {
                const evt = p.event.replace(new RegExp(`^${p.client}\\s*@\\s*`, 'i'), '');
                return `<option value="${p.id}">${p.client} @ ${evt}</option>`;
            }).join('')}
                            </select>
                        </div>
                        <div>
                            <label style="display:block; margin-bottom:6px; font-size:0.9rem; color:var(--text-secondary)">${app.t('task_name')}</label>
                            <input id="task-name-input" required style="width:100%; padding:10px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:8px; color:white;">
                        </div>
                        <div>
                            <label style="display:block; margin-bottom:6px; font-size:0.9rem; color:var(--text-secondary)">${app.t('deadline')}</label>
                            <input id="task-deadline-input" type="date" required style="width:100%; padding:10px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:8px; color:white;">
                        </div>
                    </div>
                    <div style="margin-top:24px; display:flex; justify-content:flex-end; gap:12px;">
                        <button type="button" class="btn btn-outline" onclick="document.getElementById('task-modal').close()">Cancel</button>
                        <button type="submit" class="btn btn-primary">Add Task</button>
                    </div>
                </form>
            `;
            document.body.appendChild(taskModal);
        }

        // Update User Profile
        if (document.getElementById('sidebar-name')) document.getElementById('sidebar-name').innerText = app.state.user.name;
        if (app.state.user.avatar && document.getElementById('sidebar-avatar')) {
            document.getElementById('sidebar-avatar').innerHTML = `<img src="${app.state.user.avatar}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
        }

        app.updateUILanguage();
        app.navigate(app.state.currentView || 'dashboard');

        // Demo Mode Warning
        if (window.isDemoMode) {
            const banner = document.createElement('div');
            banner.style = 'background:#f59e0b; color:black; text-align:center; padding:4px; font-size:0.8rem; font-weight:bold; position:fixed; bottom:0; width:100%; z-index:1000;';
            banner.innerHTML = '⚠️ DEMO MODE: Configuration Missing. Using Local Storage. (Edit firebase-config.js to go live)';
            document.body.appendChild(banner);
        }
    },

    renderLogin: () => {
        const container = document.querySelector('.app-container');
        document.querySelector('.sidebar').style.display = 'none';
        document.querySelector('.top-bar').style.display = 'none';

        document.getElementById('content-area').innerHTML = `
            <div style="height:90vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
                <div style="margin-bottom:30px;">
                     <!-- Logo Placeholder -->
                    <div style="font-size:4rem; font-weight:bold; background: linear-gradient(45deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">PRO EXPO</div>
                </div>
                <h2 style="font-size:2rem; margin-bottom:12px;">Welcome Back</h2>
                <p style="color:var(--text-secondary); margin-bottom:40px;">Please sign in to access your projects and quotes.</p>
                
                <button onclick="app.login()" class="btn btn-primary" style="padding:16px 40px; font-size:1.1rem; border-radius:30px; display:flex; gap:12px; align-items:center; background:white; color:black; border:none; cursor:pointer; transition:transform 0.2s;">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" style="width:24px;">
                    <span>Sign in with Google</span>
                </button>
            </div>
        `;
    },

    login: () => {
        if (!firebase) return alert("Firebase not initialized");
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).catch(e => alert(e.message));
    },

    logout: () => {
        firebase.auth().signOut().then(() => window.location.reload());
    },

    loadData: async () => {
        if (!app.state.user.uid) return;
        try {
            const doc = await firebase.firestore().collection('users').doc(app.state.user.uid).get();
            if (doc.exists) {
                const data = doc.data();
                if (data.projects) app.state.projects = data.projects;
                if (data.quotes) app.state.quotes = data.quotes;
                if (data.theme) app.state.theme = data.theme;
                // Merge Shows etc if needed
            } else {
                console.log('No remote data found, syncing initial data...');
                // Optional: Save initial data to DB?
                app.saveProjects();
            }
        } catch (e) { console.error(e); }
    },

    saveProjects: () => {
        if (app.state.user.uid) {
            firebase.firestore().collection('users').doc(app.state.user.uid).set({
                projects: app.state.projects
            }, { merge: true });
        }
    },

    saveSettings: () => {
        if (app.state.user.uid) {
            firebase.firestore().collection('users').doc(app.state.user.uid).set({
                theme: app.state.theme
            }, { merge: true });
        }
        localStorage.setItem('pe_theme', app.state.theme);
    },

    navigate: (viewId) => {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(el => el.classList.remove('active'));

        // Find button with correct onclick handler to set active
        const activeBtn = Array.from(navItems).find(el => el.getAttribute('onclick').includes(viewId));
        if (activeBtn) activeBtn.classList.add('active');

        app.state.currentView = viewId;

        const titles = {
            'dashboard': app.t('dashboard'),
            'projects': app.t('projects'),
            'tradeshows': app.t('tradeshows'),
            'tradeshows': app.t('tradeshows'),
            'clients': app.t('clients'),
            'vendors': app.t('vendors'),
            'tariffs': app.t('tariffs'),
            'quotation': app.t('new_quote'),
            'settings': app.t('settings'),
            'knowledge': app.t('ai_center'),
            'profile': 'My Profile'
        };
        document.getElementById('page-title').innerText = titles[viewId] || 'PRO EXPO';

        if (viewId !== 'knowledge') {
            document.getElementById('content-area').innerHTML = ''; // Clear strict
        }

        if (viewId === 'dashboard') app.renderDashboard();
        if (viewId === 'projects') app.renderProjects();
        if (viewId === 'tradeshows') app.renderTradeshows();
        if (viewId === 'clients') app.renderClients();
        if (viewId === 'tariffs') app.renderTariffs();
        if (viewId === 'quotation') app.renderQuotation();
        if (viewId === 'settings') app.renderSettings();
        if (viewId === 'knowledge') app.renderKnowledgeCenter();
        if (viewId === 'profile') app.renderProfile();
    },


    // --- KNOWLEDGE CENTER ---
    renderKnowledgeCenter: (tab = 'workflow') => {
        const content = document.getElementById('content-area');

        const tabs = [
            { id: 'workflow', label: app.t('workflow'), icon: 'git-merge' },
            { id: 'prompts', label: 'Trade Show Prompt Gallery', icon: 'message-square' },
            { id: 'generators', label: 'Creative AI Studio', icon: 'palette' }
        ];

        content.innerHTML = `
            <div style="margin-bottom:24px;">
                <label style="display:block; margin-bottom:8px; color:var(--text-secondary); font-size:1.1rem; font-weight:bold;">
                    <i data-lucide="sparkles" style="width:18px; color:var(--accent); vertical-align:middle;"></i> Ask anything to the Knowledge Base
                </label>
                <div style="display:flex; gap:12px;">
                    <input type="text" id="ai-input" placeholder="Type your question here (e.g., MWC height limits, branding rules...)" 
                        style="flex:1; padding:14px; background:var(--bg-dark); border:1px solid var(--accent); border-radius:12px; color:white; font-size:1rem; outline:none;"
                        onkeypress="if(event.key === 'Enter') app.searchKnowledgeBase()">
                    <button class="btn btn-outline" onclick="app.searchKnowledgeBase()" style="padding:0 20px; border-radius:12px; border-color:var(--accent);">
                        <i data-lucide="search" style="width:18px;"></i> Search Pro Expo Database
                    </button>
                    <button class="btn btn-primary" onclick="app.askAI()" style="padding:0 24px; border-radius:12px; white-space:nowrap;">
                        <i data-lucide="zap" style="width:18px;"></i> Ask ChatGPT
                    </button>
                </div>
                <div id="ai-response-area" style="margin-top:16px; display:none;">
                    <div class="card" style="border-left:4px solid var(--accent); background:rgba(255,255,255,0.02); padding:20px;">
                        <div id="ai-response-content"></div>
                    </div>
                </div>
            </div>

            <div style="display:flex; gap:16px; margin-bottom:24px; border-bottom:1px solid var(--glass-border); padding-bottom:12px;">
                ${tabs.map(t => `
                    <button onclick="app.renderKnowledgeCenter('${t.id}')" 
                        style="background:none; border:none; color:${tab === t.id ? 'var(--accent)' : 'var(--text-secondary)'}; 
                        font-weight:${tab === t.id ? 'bold' : 'normal'}; border-bottom: 2px solid ${tab === t.id ? 'var(--accent)' : 'transparent'}; 
                        padding:8px 16px; cursor:pointer; display:flex; align-items:center; gap:8px; transition:all 0.2s;">
                        <i data-lucide="${t.icon}" style="width:16px;"></i> ${t.label}
                    </button>
                `).join('')}
            </div>

            <div class="card" style="min-height:500px;">
                ${app.getKnowledgeContent(tab)}
            </div>
        `;
        lucide.createIcons();
    },

    copyToClipboard: (text) => {
        navigator.clipboard.writeText(text).then(() => {
            // Tiny toast notification could go here
            const el = document.activeElement;
            const original = el.innerHTML;
            el.innerHTML = '<i data-lucide="check" style="width:14px;"></i> Copied!';
            setTimeout(() => el.innerHTML = original, 2000);
            lucide.createIcons();
        });
    },

    createIcons: () => {
        lucide.createIcons();
    },

    searchKnowledgeBase: () => {
        const input = document.getElementById('ai-input');
        const query = input.value.trim().toLowerCase();
        if (!query) return;

        const area = document.getElementById('ai-response-area');
        const content = document.getElementById('ai-response-content');
        area.style.display = 'block';
        content.innerHTML = '<div style="display:flex; align-items:center; gap:10px;"><div class="spinner"></div> Searching internal records...</div>';

        setTimeout(() => {
            const matches = app.state.showDatabase.filter(e =>
                e.name.toLowerCase().includes(query) ||
                (e.venue && e.venue.toLowerCase().includes(query)) ||
                (e.setup && e.setup.toLowerCase().includes(query))
            );

            if (matches.length > 0) {
                content.innerHTML = `
                    <div style="display:grid; gap:16px;">
                        <div style="font-weight:bold; color:var(--accent); display:flex; align-items:center; gap:8px;">
                            <i data-lucide="database" style="width:16px;"></i> Found ${matches.length} matches in Trade Show Database:
                        </div>
                        ${matches.map(m => `
                            <div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:8px; border:1px solid var(--glass-border);">
                                <div style="display:flex; justify-content:space-between; align-items:start;">
                                    <strong style="color:white;">${m.name}</strong>
                                    <span style="font-size:0.75rem; background:var(--accent); padding:2px 8px; border-radius:10px;">${m.setup}</span>
                                </div>
                                <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">
                                    <i data-lucide="map-pin" style="width:12px; vertical-align:middle;"></i> ${m.venue}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else {
                content.innerHTML = `
                    <div style="display:flex; align-items:center; gap:12px; color:var(--warning);">
                        <i data-lucide="alert-circle"></i>
                        <span>No direct matches in corporate records for "${query}". Try asking ChatGPT for general regulations.</span>
                    </div>
                `;
            }
            lucide.createIcons();
        }, 600);
    },

    askAI: () => {
        const input = document.getElementById('ai-input');
        const query = input.value.trim();
        if (!query) return;

        const area = document.getElementById('ai-response-area');
        const content = document.getElementById('ai-response-content');

        area.style.display = 'block';
        content.innerHTML = '<div style="display:flex; align-items:center; gap:10px;"><div class="spinner"></div> Assistant is searching ProExpo Knowledge Base...</div>';

        setTimeout(() => {
            const qLower = query.toLowerCase();
            let responseHtml = '';
            let sources = [];

            // --- 1. SEARCH VENDORS ---
            const vendorMatches = app.state.vendors.filter(v =>
                v.name.toLowerCase().includes(qLower) ||
                v.category.toLowerCase().includes(qLower) ||
                v.speciality.toLowerCase().includes(qLower) ||
                (qLower.includes('print') && v.category === 'Graphics') // Contextual inference
            );

            if (vendorMatches.length > 0) {
                sources.push('Vendor Database');
                responseHtml += `
                    <div style="margin-bottom:20px;">
                        <h4 style="color:var(--accent); display:flex; align-items:center; gap:8px;">
                            <i data-lucide="shopping-cart" style="width:16px;"></i> Found ${vendorMatches.length} VendorMatch${vendorMatches.length > 1 ? 'es' : ''}
                        </h4>
                        <div style="display:grid; gap:10px; margin-top:8px;">
                            ${vendorMatches.slice(0, 3).map(v => `
                                <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; border-left:2px solid var(--accent);">
                                    <div style="font-weight:bold;">${v.name} (${v.country})</div>
                                    <div style="font-size:0.8rem; color:var(--text-secondary);">${v.category} - ${v.speciality}</div>
                                    ${v.pricing && v.pricing.length > 0 ? `<div style="font-size:0.75rem; margin-top:4px; color:var(--success);">Includes pricing data (${v.pricing.length} items)</div>` : ''}
                                </div>
                            `).join('')}
                            ${vendorMatches.length > 3 ? `<div style="font-size:0.8rem; font-style:italic;">+ ${vendorMatches.length - 3} more vendors found. check the Vendors tab.</div>` : ''}
                        </div>
                    </div>
                `;
            }

            // --- 2. SEARCH CLIENTS / PROJECTS ---
            // Group projects by client to find stats
            const clientStats = {};
            app.state.projects.forEach(p => {
                if (p.client.toLowerCase().includes(qLower)) {
                    if (!clientStats[p.client]) clientStats[p.client] = { count: 0, latest: '', shows: [] };
                    clientStats[p.client].count++;
                    clientStats[p.client].shows.push(p.event);
                    if (!clientStats[p.client].latest || p.setupDate > clientStats[p.client].latest) {
                        clientStats[p.client].latest = p.setupDate; // Approximate
                    }
                }
            });
            const matchedClients = Object.keys(clientStats);

            if (matchedClients.length > 0) {
                sources.push('Project History');
                responseHtml += `
                    <div style="margin-bottom:20px;">
                        <h4 style="color:#f59e0b; display:flex; align-items:center; gap:8px;">
                            <i data-lucide="briefcase" style="width:16px;"></i> Client History Found
                        </h4>
                        <div style="display:grid; gap:10px; margin-top:8px;">
                            ${matchedClients.slice(0, 3).map(c => `
                                <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; border-left:2px solid #f59e0b;">
                                    <div style="font-weight:bold;">${c}</div>
                                    <div style="font-size:0.85rem;">Total Projects: ${clientStats[c].count}</div>
                                    <div style="font-size:0.8rem; color:var(--text-secondary);">Recent: ${clientStats[c].shows.slice(0, 3).join(', ')}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            // --- 3. SEARCH SHOWS ---
            const showMatches = app.state.showDatabase.filter(s =>
                s.name.toLowerCase().includes(qLower) ||
                (s.venue && s.venue.toLowerCase().includes(qLower))
            );

            if (showMatches.length > 0) {
                sources.push('Trade Show DB');
                responseHtml += `
                    <div style="margin-bottom:20px;">
                        <h4 style="color:#10b981; display:flex; align-items:center; gap:8px;">
                            <i data-lucide="calendar" style="width:16px;"></i> Trade Shows
                        </h4>
                        <div style="display:grid; gap:10px; margin-top:8px;">
                            ${showMatches.slice(0, 3).map(s => `
                                <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; border-left:2px solid #10b981;">
                                    <div style="display:flex; justify-content:space-between;">
                                        <strong>${s.name}</strong>
                                        <a href="${s.manual || '#'}" target="_blank" style="font-size:0.75rem; color:#10b981;">Manual</a>
                                    </div>
                                    <div style="font-size:0.8rem;">${s.venue}, ${s.country}</div>
                                    <div style="font-size:0.8rem; color:var(--text-secondary);">Setup: ${s.setup}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            // --- 4. PROTOCOLS / FALLBACK ---
            let protocolText = '';
            if (qLower.includes('regulations') || qLower.includes('rules')) {
                protocolText = "For general regulations, most EU venues (Fira, IFEMA, Messe) require flame-retardant materials (C-s2,d0) and electrical bulletins for >50kW.";
            } else if (qLower.includes('brief') || qLower.includes('design')) {
                protocolText = "<strong>PROTOCOL: Design Phase</strong><br>1. Validate Client Brief (Form 1A).<br>2. Create Moodboard in Miro.<br>3. Tech validation before rendering.";
            } else if (responseHtml === '') {
                // Nothing found
                protocolText = "I couldn't find specific records in our database. <br>Try searching for a <strong>Vendor Name</strong>, <strong>Client</strong>, or <strong>Trade Show</strong>.<br>Or ask about <em>'Design Protocol'</em>.";
            }

            if (protocolText) {
                responseHtml += `
                    <div style="margin-top:20px; padding-top:20px; border-top:1px solid var(--glass-border);">
                        <div style="font-style:italic; color:var(--text-secondary);">${protocolText}</div>
                    </div>
                `;
            }

            content.innerHTML = responseHtml || 'No results found.';

            const sourceText = sources.length > 0 ? 'Sources: ' + sources.join(', ') : 'Source: General Knowledge';
            const footerHtml = `<p style="font-size:0.8rem; color:var(--text-secondary); font-style:italic; margin-top:10px;">${sourceText}</p>`;
            content.insertAdjacentHTML('beforeend', footerHtml);

            lucide.createIcons();

        }, 600);
    },

    typeWriterEffect: (element, html, onComplete) => {
        let i = 0;
        const speed = 10;
        element.innerHTML = '';
        const tagStack = [];

        function type() {
            if (i < html.length) {
                if (html.charAt(i) === '<') {
                    let tag = '';
                    while (html.charAt(i) !== '>' && i < html.length) {
                        tag += html.charAt(i);
                        i++;
                    }
                    tag += '>';
                    i++;
                    element.innerHTML += tag;
                } else {
                    element.innerHTML += html.charAt(i);
                    i++;
                }
                setTimeout(type, speed);
            } else {
                if (onComplete) onComplete();
            }
        }
        type();
    },

    getKnowledgeContent: (tab) => {
        if (tab === 'workflow') {
            return `
                 <div style="display:flex; justify-content:space-between; margin-bottom:20px; align-items:center;">
                    <h3>${app.t('workflow')}</h3>
                    <div style="display:flex; gap:8px;">
                        <a href="https://docs.google.com/document/d/12ArCCeMPjN1YHwq188yc_ESVcCGwOODhr7eZrMZ3du8/edit?tab=t.0#heading=h.rq1hyi9mm4iv" target="_blank" class="btn btn-outline" style="text-decoration:none; font-size:0.8rem;">
                            <i data-lucide="file-text" style="width:14px;"></i> PM Protocol
                        </a>
                        <button class="btn btn-outline" style="font-size:0.8rem; opacity:0.6; cursor:not-allowed;" title="Coming Soon">
                            <i data-lucide="pen-tool" style="width:14px;"></i> Design Protocol
                        </button>
                    </div>
                </div>

                <div style="background:rgba(255,255,255,0.02); border-radius:16px; border:1px solid var(--glass-border); overflow:hidden;">
                    <div style="padding:24px; background:rgba(0,0,0,0.2); border-bottom:1px solid var(--glass-border);">
                        <h4 style="margin:0; display:flex; align-items:center; gap:10px; color:var(--accent);">
                            <i data-lucide="map" style="width:20px;"></i> ProExpo Project Roadmap
                        </h4>
                        <p style="margin:4px 0 0 30px; font-size:0.85rem; color:var(--text-secondary);">standard operational procedure (SOP)</p>
                    </div>
                    
                    <div style="padding:32px; position:relative;">
                        <!-- Vertical Line -->
                        <div style="position:absolute; left:46px; top:32px; bottom:32px; width:2px; background:var(--glass-border);"></div>

                        <!-- 1. Initiation -->
                        <div style="display:flex; gap:24px; margin-bottom:32px; position:relative;">
                            <div style="width:32px; height:32px; background:var(--bg-dark); border:2px solid #3b82f6; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:1;">
                                <span style="font-size:0.8rem; font-weight:bold; color:#3b82f6;">1</span>
                            </div>
                            <div style="flex:1;">
                                <h5 style="margin:0 0 12px 0; color:#3b82f6; font-size:1rem;">Initiation & Brief</h5>
                                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">
                                    <div class="glass" style="padding:12px; border-radius:8px;">
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:4px;">New Project</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary);">Input: Client / Sales Manager</div>
                                    </div>
                                    <div class="glass" style="padding:12px; border-radius:8px;">
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:4px;">Briefing Analysis</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary);">Scope, Budget, Deadline</div>
                                    </div>
                                    <div class="glass" style="padding:12px; border-radius:8px;">
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:4px;">PM Selection</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary);">By Leadership</div>
                                    </div>
                                    <div class="glass" style="padding:12px; border-radius:8px;">
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:4px;">Project Kick-off</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary);">Owner: Project Manager</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 2. Design -->
                        <div style="display:flex; gap:24px; margin-bottom:32px; position:relative;">
                            <div style="width:32px; height:32px; background:var(--bg-dark); border:2px solid #8b5cf6; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:1;">
                                <span style="font-size:0.8rem; font-weight:bold; color:#8b5cf6;">2</span>
                            </div>
                            <div style="flex:1;">
                                <h5 style="margin:0 0 12px 0; color:#8b5cf6; font-size:1rem;">Design & Strategy</h5>
                                <div style="display:flex; gap:16px;">
                                    <div class="glass" style="padding:16px; border-radius:8px; flex:1; border-left:2px solid #8b5cf6;">
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:8px;">Design Phase</div>
                                        <div style="display:grid; gap:8px;">
                                            <div style="font-size:0.8rem; display:flex; justify-content:space-between; padding:4px; background:rgba(255,255,255,0.05); border-radius:4px;">
                                                <span>Budget &lt; 80k</span>
                                                <span style="color:var(--text-secondary);">PM / Designer</span>
                                            </div>
                                            <div style="font-size:0.8rem; display:flex; justify-content:space-between; padding:4px; background:rgba(255,255,255,0.05); border-radius:4px;">
                                                <span>Budget &gt; 80k</span>
                                                <span style="color:var(--text-secondary);">Design Team Lead</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="glass" style="padding:16px; border-radius:8px; width:200px; display:flex; align-items:center; justify-content:center; text-align:center;">
                                        <div>
                                            <i data-lucide="presentation" style="width:20px; color:#8b5cf6; margin-bottom:8px;"></i>
                                            <div style="font-weight:600; font-size:0.9rem;">Proposal</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 3. Commercial -->
                        <div style="display:flex; gap:24px; margin-bottom:32px; position:relative;">
                            <div style="width:32px; height:32px; background:var(--bg-dark); border:2px solid #f59e0b; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:1;">
                                <span style="font-size:0.8rem; font-weight:bold; color:#f59e0b;">3</span>
                            </div>
                            <div style="flex:1;">
                                <h5 style="margin:0 0 12px 0; color:#f59e0b; font-size:1rem;">Commercial & Approval</h5>
                                <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:16px; align-items:start;">
                                    <!-- Quotation -->
                                    <div class="glass" style="padding:12px; border-radius:8px;">
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:8px;">Quotation</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:4px;">
                                            <i data-lucide="users" style="width:10px;"></i> Vendors 1, 2, 3
                                        </div>
                                        <div style="height:4px; width:100%; background:rgba(255,255,255,0.1); border-radius:2px;">
                                            <div style="width:70%; height:100%; background:#f59e0b;"></div>
                                        </div>
                                    </div>
                                    
                                    <!-- Loops -->
                                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px;">
                                        <div class="glass" style="padding:8px 16px; border-radius:20px; font-size:0.85rem;">Submission</div>
                                        <i data-lucide="arrow-down" style="width:14px; opacity:0.5;"></i>
                                        <div style="border:1px dashed var(--text-secondary); padding:8px; border-radius:8px; font-size:0.75rem; text-align:center; width:100%;">
                                            Changes <i data-lucide="refresh-ccw" style="width:10px; margin:0 4px;"></i> Follow Up
                                        </div>
                                        <i data-lucide="arrow-down" style="width:14px; opacity:0.5;"></i>
                                    </div>

                                    <!-- Approval -->
                                    <div class="glass" style="padding:12px; border-radius:8px; border:1px solid #10b981; position:relative;">
                                        <div style="position:absolute; top:-10px; right:-10px; background:#10b981; color:white; padding:4px; border-radius:50%;">
                                            <i data-lucide="check" style="width:12px; height:12px;"></i>
                                        </div>
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:4px;">Approval</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary);">Contract & Deposit</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         <!-- 4. Execution -->
                        <div style="display:flex; gap:24px; margin-bottom:32px; position:relative;">
                            <div style="width:32px; height:32px; background:var(--bg-dark); border:2px solid #10b981; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:1;">
                                <span style="font-size:0.8rem; font-weight:bold; color:#10b981;">4</span>
                            </div>
                            <div style="flex:1;">
                                <h5 style="margin:0 0 12px 0; color:#10b981; font-size:1rem;">Execution</h5>
                                <div style="display:flex; gap:6px;">
                                    <div class="glass" style="padding:16px; border-radius:8px; flex:1; text-align:center;">
                                        <i data-lucide="factory" style="width:24px; color:#10b981; margin-bottom:8px;"></i>
                                        <div style="font-weight:600; font-size:0.9rem;">Production</div>
                                        <div style="font-size:0.7rem; color:var(--text-secondary);">Supervision</div>
                                    </div>
                                    <i data-lucide="arrow-right" style="width:16px; align-self:center; color:var(--glass-border);"></i>
                                    <div class="glass" style="padding:16px; border-radius:8px; flex:1; text-align:center;">
                                        <i data-lucide="hammer" style="width:24px; color:#10b981; margin-bottom:8px;"></i>
                                        <div style="font-weight:600; font-size:0.9rem;">Set-Up</div>
                                        <div style="font-size:0.7rem; color:var(--text-secondary);">Supervision</div>
                                    </div>
                                    <i data-lucide="arrow-right" style="width:16px; align-self:center; color:var(--glass-border);"></i>
                                    <div class="glass" style="padding:16px; border-radius:8px; flex:1; text-align:center;">
                                        <i data-lucide="flag" style="width:24px; color:#10b981; margin-bottom:8px;"></i>
                                        <div style="font-weight:600; font-size:0.9rem;">Delivery</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 5. Closing -->
                        <div style="display:flex; gap:24px; position:relative;">
                            <div style="width:32px; height:32px; background:var(--bg-dark); border:2px solid #ec4899; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:1;">
                                <span style="font-size:0.8rem; font-weight:bold; color:#ec4899;">5</span>
                            </div>
                            <div style="flex:1;">
                                <h5 style="margin:0 0 12px 0; color:#ec4899; font-size:1rem;">Post-Event</h5>
                                <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:12px;">
                                    <div class="glass" style="padding:10px; border-radius:6px; text-align:center; font-size:0.8rem;">Follow-up</div>
                                    <div class="glass" style="padding:10px; border-radius:6px; text-align:center; font-size:0.8rem;">Report</div>
                                    <div class="glass" style="padding:10px; border-radius:6px; text-align:center; font-size:0.8rem;">Feedback</div>
                                    <div class="glass" style="padding:10px; border-radius:6px; text-align:center; font-size:0.8rem; border:1px solid #ec4899; color:#ec4899; font-weight:bold;">CE Doc</div>
                                </div>
                            </div>
                    </div>
                </div>
            `;
        }
        if (tab === 'regulations') {
            const allShows = app.state.showDatabase.filter(s => s.name.includes('2026') || s.name.includes('2025')); // Include 2025 too if needed, but primarily 2026 based on previous filtering

            // Initialize filter state if not exists
            if (!app.state.regulationsFilter) app.state.regulationsFilter = { country: '', venue: '' };
            const filter = app.state.regulationsFilter;

            // Extract unique options
            const countries = [...new Set(allShows.map(s => s.country).filter(Boolean))].sort();
            const venues = [...new Set(allShows.map(s => s.venue).filter(Boolean))].sort();

            // Filter shows
            const shows = allShows.filter(s => {
                const matchCountry = !filter.country || s.country === filter.country;
                const matchVenue = !filter.venue || s.venue === filter.venue;
                return matchCountry && matchVenue;
            });

            return `
                <div style="display:flex; justify-content:space-between; margin-bottom:20px; align-items:center;">
                    <h3>${app.t('regulations')}</h3>
                    <div style="display:flex; gap:12px;">
                        <select onchange="app.setRegulationsFilter('country', this.value)" style="padding:8px; border-radius:8px; background:var(--glass-bg); border:1px solid var(--glass-border); color:var(--text-primary); outline:none; cursor:pointer;" class="glass-input">
                            <option value="" style="background:var(--bg-dark); color:white;">All Countries</option>
                            ${countries.map(c => `<option value="${c}" ${filter.country === c ? 'selected' : ''} style="background:var(--bg-dark); color:white;">${c}</option>`).join('')}
                        </select>
                        <select onchange="app.setRegulationsFilter('venue', this.value)" style="padding:8px; border-radius:8px; background:var(--glass-bg); border:1px solid var(--glass-border); color:var(--text-primary); outline:none; cursor:pointer;" class="glass-input">
                            <option value="" style="background:var(--bg-dark); color:white;">All Venues</option>
                            ${venues.map(v => `<option value="${v}" ${filter.venue === v ? 'selected' : ''} style="background:var(--bg-dark); color:white;">${v}</option>`).join('')}
                        </select>
                    </div>
                </div>
                
                <h4 style="margin-bottom:12px;">Official Exhibitor Manuals & Floorplans (${shows.length})</h4>
                <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:16px;">
                    ${shows.map(show => {
                let color = '#3b82f6'; // default blue
                if (show.name.includes('MWC')) color = '#e11d48'; // red
                if (show.name.includes('ICE') || show.name.includes('iGB')) color = '#fbbf24'; // amber
                if (show.name.includes('ISE') || show.name.includes('IMCAS')) color = '#8b5cf6'; // purple
                if (show.name.includes('PCR') || show.name.includes('EAU')) color = '#10b981'; // green

                return `
             <div style="padding:16px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:12px; border-top:3px solid ${color};">
                            <div style="display:flex; justify-content:space-between; align-items:start;">
                                <div>
                                    <strong style="font-size:1.1rem;">${show.name}</strong>
                                    <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px;">${show.venue} • Setup: ${show.setup}</p>
                                </div>
                                <button onclick="app.editShow('${show.name}')" style="background:none; border:none; color:var(--text-secondary); padding:4px;">
                                    <i data-lucide="edit-2" style="width:16px;"></i>
                                </button>
                            </div>
                            <div style="margin-top:16px; display:grid; gap:8px;">
                                <a href="${show.manual || '#'}" target="_blank" 
                                   style="font-size:0.85rem; color:white; text-decoration:none; display:flex; align-items:center; gap:8px; cursor:pointer;">
                                    <i data-lucide="file-text" style="width:14px;"></i> Exhibitor Manual
                                </a>
                                
                                <a href="${show.floorplan || '#'}" target="_blank" 
                                   style="font-size:0.85rem; color:white; text-decoration:none; display:flex; align-items:center; gap:8px; padding:6px; background:rgba(255,255,255,0.05); border-radius:6px; transition:background 0.2s; margin-top:4px;" 
                                   onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'">
                                    <i data-lucide="grid" style="width:14px; color:${color};"></i> <span style="font-weight:600;">Trade Show Floorplan</span>
                                </a>

                                <a href="${show.venueMap || show.map || '#'}" target="_blank" 
                                   style="font-size:0.85rem; color:white; text-decoration:none; display:flex; align-items:center; gap:8px; padding:6px; background:rgba(255,255,255,0.05); border-radius:6px; transition:background 0.2s; margin-top:4px; cursor:pointer;" 
                                   onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'">
                                    <i data-lucide="map-pin" style="width:14px; color:${color};"></i> <span style="font-weight:600;">Venue Location</span>
                                </a>
                            </div>
                        </div >
    `;
            }).join('')}
                </div>
            `;
        }
        if (tab === 'workflow') {
            return `
                <div style="display:flex; justify-content:space-between; margin-bottom:20px; align-items:center;">
                    <h3>${app.t('workflow')}</h3>
                </div>

                <div style="background:rgba(255,255,255,0.02); border-radius:16px; border:1px solid var(--glass-border); overflow:hidden;">
                    <div style="padding:24px; background:rgba(0,0,0,0.2); border-bottom:1px solid var(--glass-border);">
                        <h4 style="margin:0; display:flex; align-items:center; gap:10px; color:var(--accent);">
                            <i data-lucide="map" style="width:20px;"></i> ProExpo Project Roadmap
                        </h4>
                        <p style="margin:4px 0 0 30px; font-size:0.85rem; color:var(--text-secondary);">standard operational procedure (SOP)</p>
                    </div>
                    
                    <div style="padding:32px; position:relative;">
                        <!-- Vertical Line -->
                        <div style="position:absolute; left:46px; top:32px; bottom:32px; width:2px; background:var(--glass-border);"></div>

                        <!-- 1. Initiation -->
                        <div style="display:flex; gap:24px; margin-bottom:32px; position:relative;">
                            <div style="width:32px; height:32px; background:var(--bg-dark); border:2px solid #3b82f6; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:1;">
                                <span style="font-size:0.8rem; font-weight:bold; color:#3b82f6;">1</span>
                            </div>
                            <div style="flex:1;">
                                <h5 style="margin:0 0 12px 0; color:#3b82f6; font-size:1rem;">Initiation & Brief</h5>
                                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">
                                    <div class="glass" style="padding:12px; border-radius:8px;">
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:4px;">New Project</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary);">Input: Client / Sales Manager</div>
                                    </div>
                                    <div class="glass" style="padding:12px; border-radius:8px;">
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:4px;">Briefing Analysis</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary);">Scope, Budget, Deadline</div>
                                    </div>
                                    <div class="glass" style="padding:12px; border-radius:8px;">
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:4px;">PM Selection</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary);">By Leadership</div>
                                    </div>
                                    <div class="glass" style="padding:12px; border-radius:8px;">
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:4px;">Project Kick-off</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary);">Owner: Project Manager</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 2. Design -->
                        <div style="display:flex; gap:24px; margin-bottom:32px; position:relative;">
                            <div style="width:32px; height:32px; background:var(--bg-dark); border:2px solid #8b5cf6; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:1;">
                                <span style="font-size:0.8rem; font-weight:bold; color:#8b5cf6;">2</span>
                            </div>
                            <div style="flex:1;">
                                <h5 style="margin:0 0 12px 0; color:#8b5cf6; font-size:1rem;">Design & Strategy</h5>
                                <div style="display:flex; gap:16px;">
                                    <div class="glass" style="padding:16px; border-radius:8px; flex:1; border-left:2px solid #8b5cf6;">
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:8px;">Design Phase</div>
                                        <div style="display:grid; gap:8px;">
                                            <div style="font-size:0.8rem; display:flex; justify-content:space-between; padding:4px; background:rgba(255,255,255,0.05); border-radius:4px;">
                                                <span>Budget &lt; 80k</span>
                                                <span style="color:var(--text-secondary);">PM / Designer</span>
                                            </div>
                                            <div style="font-size:0.8rem; display:flex; justify-content:space-between; padding:4px; background:rgba(255,255,255,0.05); border-radius:4px;">
                                                <span>Budget &gt; 80k</span>
                                                <span style="color:var(--text-secondary);">Design Team Lead</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="glass" style="padding:16px; border-radius:8px; width:200px; display:flex; align-items:center; justify-content:center; text-align:center;">
                                        <div>
                                            <i data-lucide="presentation" style="width:20px; color:#8b5cf6; margin-bottom:8px;"></i>
                                            <div style="font-weight:600; font-size:0.9rem;">Proposal</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 3. Commercial -->
                        <div style="display:flex; gap:24px; margin-bottom:32px; position:relative;">
                            <div style="width:32px; height:32px; background:var(--bg-dark); border:2px solid #f59e0b; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:1;">
                                <span style="font-size:0.8rem; font-weight:bold; color:#f59e0b;">3</span>
                            </div>
                            <div style="flex:1;">
                                <h5 style="margin:0 0 12px 0; color:#f59e0b; font-size:1rem;">Commercial & Approval</h5>
                                <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:16px; align-items:start;">
                                    <!-- Quotation -->
                                    <div class="glass" style="padding:12px; border-radius:8px;">
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:8px;">Quotation</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:4px;">
                                            <i data-lucide="users" style="width:10px;"></i> Vendors 1, 2, 3
                                        </div>
                                        <div style="height:4px; width:100%; background:rgba(255,255,255,0.1); border-radius:2px;">
                                            <div style="width:70%; height:100%; background:#f59e0b;"></div>
                                        </div>
                                    </div>
                                    
                                    <!-- Loops -->
                                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px;">
                                        <div class="glass" style="padding:8px 16px; border-radius:20px; font-size:0.85rem;">Submission</div>
                                        <i data-lucide="arrow-down" style="width:14px; opacity:0.5;"></i>
                                        <div style="border:1px dashed var(--text-secondary); padding:8px; border-radius:8px; font-size:0.75rem; text-align:center; width:100%;">
                                            Changes <i data-lucide="refresh-ccw" style="width:10px; margin:0 4px;"></i> Follow Up
                                        </div>
                                        <i data-lucide="arrow-down" style="width:14px; opacity:0.5;"></i>
                                    </div>

                                    <!-- Approval -->
                                    <div class="glass" style="padding:12px; border-radius:8px; border:1px solid #10b981; position:relative;">
                                        <div style="position:absolute; top:-10px; right:-10px; background:#10b981; color:white; padding:4px; border-radius:50%;">
                                            <i data-lucide="check" style="width:12px; height:12px;"></i>
                                        </div>
                                        <div style="font-weight:600; font-size:0.9rem; margin-bottom:4px;">Approval</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary);">Contract & Deposit</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         <!-- 4. Execution -->
                        <div style="display:flex; gap:24px; margin-bottom:32px; position:relative;">
                            <div style="width:32px; height:32px; background:var(--bg-dark); border:2px solid #10b981; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:1;">
                                <span style="font-size:0.8rem; font-weight:bold; color:#10b981;">4</span>
                            </div>
                            <div style="flex:1;">
                                <h5 style="margin:0 0 12px 0; color:#10b981; font-size:1rem;">Execution</h5>
                                <div style="display:flex; gap:6px;">
                                    <div class="glass" style="padding:16px; border-radius:8px; flex:1; text-align:center;">
                                        <i data-lucide="factory" style="width:24px; color:#10b981; margin-bottom:8px;"></i>
                                        <div style="font-weight:600; font-size:0.9rem;">Production</div>
                                        <div style="font-size:0.7rem; color:var(--text-secondary);">Supervision</div>
                                    </div>
                                    <i data-lucide="arrow-right" style="width:16px; align-self:center; color:var(--glass-border);"></i>
                                    <div class="glass" style="padding:16px; border-radius:8px; flex:1; text-align:center;">
                                        <i data-lucide="hammer" style="width:24px; color:#10b981; margin-bottom:8px;"></i>
                                        <div style="font-weight:600; font-size:0.9rem;">Set-Up</div>
                                        <div style="font-size:0.7rem; color:var(--text-secondary);">Supervision</div>
                                    </div>
                                    <i data-lucide="arrow-right" style="width:16px; align-self:center; color:var(--glass-border);"></i>
                                    <div class="glass" style="padding:16px; border-radius:8px; flex:1; text-align:center;">
                                        <i data-lucide="flag" style="width:24px; color:#10b981; margin-bottom:8px;"></i>
                                        <div style="font-weight:600; font-size:0.9rem;">Delivery</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 5. Closing -->
                        <div style="display:flex; gap:24px; position:relative;">
                            <div style="width:32px; height:32px; background:var(--bg-dark); border:2px solid #ec4899; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:1;">
                                <span style="font-size:0.8rem; font-weight:bold; color:#ec4899;">5</span>
                            </div>
                            <div style="flex:1;">
                                <h5 style="margin:0 0 12px 0; color:#ec4899; font-size:1rem;">Post-Event</h5>
                                <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:12px;">
                                    <div class="glass" style="padding:10px; border-radius:6px; text-align:center; font-size:0.8rem;">Follow-up</div>
                                    <div class="glass" style="padding:10px; border-radius:6px; text-align:center; font-size:0.8rem;">Report</div>
                                    <div class="glass" style="padding:10px; border-radius:6px; text-align:center; font-size:0.8rem;">Feedback</div>
                                    <div class="glass" style="padding:10px; border-radius:6px; text-align:center; font-size:0.8rem; border:1px solid #ec4899; color:#ec4899; font-weight:bold;">CE Doc</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Show Edit Modal -->
                <dialog id="show-modal" class="glass" style="margin:auto; border-radius:16px; border:1px solid var(--glass-border); padding:0; width:500px; max-width:90vw; background:var(--bg-dark); color:white;">
                    <div style="padding:20px; border-bottom:1px solid var(--glass-border); display:flex; justify-content:space-between;">
                        <h3>Edit Show Links</h3>
                        <button onclick="document.getElementById('show-modal').close()" style="background:none; border:none; color:white; cursor:pointer;">X</button>
                    </div>
                    <div style="padding:24px; display:flex; flex-direction:column; gap:16px;">
                        <input type="hidden" id="edit-show-name">
                        
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem;">Exhibitor Manual URL</label>
                            <input type="text" id="edit-show-manual" placeholder="https://..." style="width:100%; padding:10px; background:rgba(0,0,0,0.2); border:1px solid var(--glass-border); color:white; border-radius:8px;">
                        </div>

                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem;">Trade Show Floorplan URL</label>
                            <input type="text" id="edit-show-floorplan" placeholder="https://..." style="width:100%; padding:10px; background:rgba(0,0,0,0.2); border:1px solid var(--glass-border); color:white; border-radius:8px;">
                        </div>

                         <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem;">Venue Location (Google Maps) URL</label>
                            <input type="text" id="edit-show-venue-map" placeholder="https://..." style="width:100%; padding:10px; background:rgba(0,0,0,0.2); border:1px solid var(--glass-border); color:white; border-radius:8px;">
                        </div>

                        <button onclick="app.saveShow()" class="btn btn-primary" style="justify-content:center; margin-top:8px;">Save Changes</button>
                    </div>
                </dialog>
            `;
        }

        if (tab === 'prompts') {
            const sections = [
                {
                    tool: 'ChatGPT (Operations & PM)',
                    icon: 'message-square',
                    color: '#10a37f',
                    prompts: [
                        { title: 'Post-Show Debrief Email', prompt: 'Draft a professional post-show debrief email to the client [CLIENT NAME] for [EVENT]. Highlight that the stand was a success (mention visitor engagement), inform them we are gathering final costs for the closing invoice, and specifically ask for their feedback on the onsite service team performance. Keep the tone grateful but efficient and focused on next steps.' },
                        { title: 'Production Timeline Generator', prompt: 'Create a detailed, reverse-engineered production timeline for a 50sqm trade show stand. The setup starts on [DATE]. I need specific milestones and dates for: Final Design Approval, Graphics Files Submission, CNS/CNC Production Start, Trial Assembly in Warehouse, AV Content Check, and Logistics Dispatch. Present as a table with columns for "Task", "Deadline", and "Owner".' },
                        { title: 'Rewrite Email (Polite Pushback)', prompt: 'Rewrite the following email to a client who wants to make major structural changes 2 days before the show. politely explain that due to production timelines, structural changes are no longer possible without significant risk and cost, but offer a graphical alternative (e.g. vinyl overlay) to solve their issue. Tone: Firm but helpful.' },
                        { title: 'Sales Pitch Strategy', prompt: 'Write a persuasive sales email to a potential client [COMPANY] exhibiting at [EVENT]. Acknowledge their past stands were good, but propose a "Visitor Experience First" approach for 2026. Mention our capability in interactive technology and sustainable materials. Ask for a 15-minute call to share a moodboard idea.' },
                        { title: 'Damage Control (Onsite Issue)', prompt: 'Draft a damage control message to a client. Situation: The main video wall execution has failed due to a supplier error, and we are replacing it with a slightly smaller screen + branded surround within 2 hours. Apologize sincerely for the hiccup, emphasize the quick solution we are implementing, and reassure them the visual impact will remain high.' },
                        { title: 'Meeting Minutes Generator', prompt: 'Summarize the following transcript/notes of a client kickoff call into formal meeting minutes. Identify key action items, assign owners (PM, Design, Production), and set deadlines based on the show date [DATE]. Format as a clean bulleted list organized by department.' },
                        { title: 'Budget Negotiation Script', prompt: 'Write a script for a negotiation call with a local AV supplier in Barcelona. Goal: Reduce the cost of the LED wall rental by 15% in exchange for confirming 3 future shows with them. Tone: collaborative, professional, but firm on the target price.' },
                        { title: 'Change Order Request', prompt: 'Draft a Change Order email for the client [CLIENT NAME]. They requested [ADDITIONAL ELEMENT] (e.g., extra furniture/screens) after the production freeze date. Explain that this incurs a rush fee of [AMOUNT] and requires immediate approval to guarantee delivery. Attach the updated quote.' }
                    ]
                },
                {
                    tool: 'Midjourney (Design & Concept)',
                    icon: 'image',
                    color: '#5865F2',
                    prompts: [
                        { title: 'Tech / Minimalist Stand', prompt: '/imagine prompt: exhibition stand for a B2B technology company, 6x6 meters, 3 sides open, glossy white minimalist finishes with dynamic [COLOR] LED lighting strips embedded in the floor and headers, large seamless video wall backend, futuristic curved reception desk, clean lines, unreal engine 5 render, volumetrics, 8k --ar 16:9 --stylize 250' },
                        { title: 'Sustainable / Eco Booth', prompt: '/imagine prompt: high-end eco-friendly trade show booth, use of raw sustainable materials, light natural oak wood slats, hanging vertical gardens and biophilic design elements, warm inviting lighting, soft fabric textures, scandinavian modern furniture, architectural photography style, soft shadows, photorealistic --ar 16:9 --stylize 200' },
                        { title: 'Corporate / Premium', prompt: '/imagine prompt: premium corporate double-decker exhibition stand, glass enclosed meeting rooms on upper level, luxury VIP lounge area on ground floor usage marble and velvet textures, dark sophisticated color palette with gold brushed metal accents, dramatic spotlighting, cinematic wide angle shot, 8k render --ar 16:9 --stylize 750' },
                        { title: 'Immersive Retail Experience', prompt: '/imagine prompt: experiential retail pop-up store inside a trade show, neon signage, vibrant bold colors, interactive product display pedestals with floating elements, mirrored ceiling for depth, cyberpunk aesthetic mixed with clean retail design, high energy atmosphere, 8k octane render --ar 16:9' }
                    ]
                },
                {
                    tool: 'Runway ML (Animation)',
                    icon: 'video',
                    color: '#ec4899',
                    prompts: [
                        { title: 'Cinematic Flythrough', prompt: 'Slow smooth camera movement flying through the center of a modern white exhibition stand, passing by the reception desk and turning towards the meeting area, cinematic lighting, 4k, architectural visualization, depth of field, high budget commercial style.' },
                        { title: 'Lighting Reveal', prompt: 'Time-lapse style lighting shift from complete darkness to fully lit booth, capturing the sequence of LED strips turning on, spotlights focusing, and screens booting up, energetic and dramatic atmosphere.' },
                        { title: 'Interactive Screen Loop', prompt: 'Abstract digital tech background loop, flowing blue data particles and geometric shapes, seamless motion, high contrast, suitable for a large LED video wall backdrop.' },
                        { title: 'Crowd Simulation', prompt: 'Architectural visualization of a trade show booth, time-lapse of blurred people moving through the space, negotiating at tables, dynamic motion blur to show high traffic and engagement.' }
                    ]
                },
                {
                    tool: 'Krea AI (Enhancement)',
                    icon: 'wand',
                    color: '#8b5cf6',
                    prompts: [
                        { title: 'Sketch to Photorealism', prompt: 'Convert this SketchUp wireframe line drawing into a photorealistic high-end architectural render. Apply materials: Glossy white laminate for walls, light oak wood for flooring, glass for meeting rooms. Add warm ambient lighting and a busy convention center background with blurred people.' },
                        { title: 'Lighting Upscale', prompt: 'Upscale this image while enhancing the lighting effects: Add bloom to the LED strips, create realistic soft shadows under the furniture, and balance the exposure to look like professional architectural photography.' },
                        { title: '4K Detail Pass', prompt: 'Enhance image to 4k resolution, sharpening details on the graphics and text, removing noise, and adding subtle surface imperfections to materials to increase realism.' },
                        { title: 'Print Quality Upscale', prompt: 'Upscale this low-resolution logo file to be suitable for large format print on a 4 meter high wall. Sharpen edges, remove jpeg artifacts, and ensure vector-like quality.' }
                    ]
                },
                {
                    tool: 'Grok (Market Intel)',
                    icon: 'twitter',
                    color: '#000000',
                    prompts: [
                        { title: 'Competitor Buzz Check', prompt: 'Analyze real-time X posts about [COMPETITOR NAME] at [EVENT] over the last 24 hours. What are visitors specifically saying about their stand design, product demos, or giveaways? Summarize the general sentiment (positive/negative) and key takeaways.' },
                        { title: 'Event Trending Topics', prompt: 'What are the top 5 trending technologies or discussion topics at MWC Barcelona right now based on hashtags? Focus specifically on hardware innovation and exhibition experiences. Provide examples of viral posts.' },
                        { title: 'Key Influencer Identification', prompt: 'Identify the top 5 influencers or journalists currently tweeting about [EVENT] with high engagement. Provide their handles and a brief summary of what specific topics they are covering today.' },
                        { title: 'Post-Show Sentiment Analysis', prompt: 'Perform a sentiment analysis of tweets mentioning [EVENT] from the last day of the show. Did attendees complain about logistics (wifi, food, queues) or praise specific exhibitors? Give a bullet point summary.' }
                    ]
                }
            ];

            return `
                <div style="display:flex; justify-content:space-between; margin-bottom:20px; align-items:center;">
                    <h3>Trade Show Prompt Gallery</h3>
                    <p style="color:var(--text-secondary);">Curated prompts for PM workflows and Creative Design.</p>
                </div>

                <div style="display:grid; gap:32px;">
                    ${sections.map(section => `
                        <div>
                            <div style="display:flex; align-items:center; gap:10px; margin-bottom:16px; border-bottom:1px solid var(--glass-border); padding-bottom:8px;">
                                <div style="background:${section.color}; color:white; padding:6px; border-radius:8px;">
                                    <i data-lucide="${section.icon}" style="width:16px;"></i>
                                </div>
                                <h4 style="margin:0; color:${section.color === '#000000' ? 'white' : section.color};">${section.tool}</h4>
                            </div>
                            <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap:16px;">
                                ${section.prompts.map(p => `
                                    <div class="card" style="display:flex; flex-direction:column;">
                                        <h5 style="margin-bottom:8px; color:white; font-size:0.95rem;">${p.title}</h5>
                                        <div style="font-family:monospace; background:rgba(0,0,0,0.3); padding:10px; border-radius:6px; font-size:0.8rem; color:#cbd5e1; margin-bottom:12px; border:1px solid var(--glass-border); flex:1;">
                                            ${p.prompt}
                                        </div>
                                        <button class="btn btn-outline btn-sm" onclick="app.copyToClipboard('${p.prompt.replace(/'/g, "\\'")}')" style="align-self:start;">
                                            <i data-lucide="copy" style="width:12px;"></i> Copy
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        if (tab === 'generators') {
            const activeTool = app.state.activeCreativeTool;

            // --- 1. Maximized Views ---
            if (activeTool) {
                const backButton = `
                    <button onclick="app.state.activeCreativeTool=null; app.renderKnowledgeCenter('generators')" class="btn btn-outline" style="margin-bottom:20px; border:none; padding-left:0; color:var(--text-secondary);">
                        <i data-lucide="arrow-left" style="width:18px;"></i> Back to Creative AI Studio
                    </button>
                `;

                if (activeTool === 'midjourney') {
                    return `
                        ${backButton}
                        <div class="card" style="height:calc(100vh - 240px); display:flex; flex-direction:column; background:linear-gradient(145deg, rgba(88, 101, 242, 0.1), rgba(15, 23, 42, 0.4)); border:1px solid rgba(88, 101, 242, 0.3); position:relative; overflow:hidden;">
                            <input type="text" value="v6.0" style="position:absolute; top:0; right:0; width:auto; padding:8px 16px; background:#5865F2; color:white; font-weight:bold; font-size:0.75rem; border:none; border-bottom-left-radius:12px; text-align:center;" readonly>
                            
                            <div style="display:flex; align-items:center; gap:16px; margin-bottom:30px;">
                                <div style="width:64px; height:64px; background:#ffffff; border-radius:16px; display:flex; align-items:center; justify-content:center;">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Midjourney_Emblem.png" alt="MJ" style="width:40px;">
                                </div>
                                <div>
                                    <h2 style="margin:0;">Midjourney</h2>
                                    <p style="font-size:0.9rem; color:var(--text-secondary);">Professional Image Generation & Architectural Renders</p>
                                </div>
                            </div>

                            <div style="margin-bottom:24px; flex:1;">
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                                    <label style="font-size:0.9rem; color:#cbd5e1;">Prompt Configuration</label>
                                    <select onchange="document.getElementById('mj-prompt').value = this.value; this.value='';" style="padding:6px; border-radius:6px; background:rgba(255,255,255,0.1); color:var(--text-secondary); border:none; font-size:0.8rem; max-width:200px;">
                                        <option value="">✨ Load Gallery Prompt...</option>
                                        <option value="/imagine prompt: massive double-decker exhibition stand for a Tech company at MWC Barcelona, 200sqm, open layout, white glossy finish with blue LED strips, large hanging banner with &quot;FUTURE&quot; logo, busy atmosphere, 8k realistic render, architectural photography">Tech Double Decker</option>
                                        <option value="/imagine prompt: eco-friendly trade show booth design, 6x3 meters, made of natural wood and recycled materials, hanging plants, warm lighting, cozy seating area, scandinavian minimalist style, photorealistic">Sustainable Wood</option>
                                        <option value="/imagine prompt: pharmaceutical exhibition stand design, clean white surfaces, turquoise accents, medical reception counter, private meeting rooms with glass walls, bright clinical lighting, high definition 3d render">Pharma / Medical</option>
                                        <option value="/imagine prompt: isometric view of an exhibition stand 10x10 meters, zoning layout, reception area, demo stations, and meeting room, clean white background, architectural diagram style, soft shadows, 4k">Isometric Floorplan</option>
                                        <option value="/imagine prompt: close-up architectural shot of exhibition stand lighting features, LED strip accents in floor and ceiling, dramatic spotlighting on product display, moody atmosphere, dark background, cinematic 8k --ar 16:9">Lighting Design Detail</option>
                                        <option value="/imagine prompt: overhead view of a 10x10 meter exhibition stand, clear layout showing reception, product display zones, and meeting areas, minimalist architectural drawing style, white background, 4k --ar 1:1">Overhead Floorplan</option>
                                    </select>
                                </div>
                                <textarea id="mj-prompt" placeholder="/imagine prompt: a futuristic exhibition stand for Samsung at MWC Barcelona, hyper realistic, 8k, architectural render..." 
                                    style="width:100%; height:60%; padding:16px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:12px; color:white; font-family:monospace; resize:none; font-size:1rem; line-height:1.5;"></textarea>
                            </div>

                            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px; margin-bottom:32px;">
                                <div>
                                    <label style="display:block; margin-bottom:8px; font-size:0.85rem; color:var(--text-secondary);">Aspect Ratio</label>
                                    <select id="mj-ar" style="width:100%; padding:12px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:white;">
                                        <option value="--ar 16:9">16:9 (Cinematic Widescreen)</option>
                                        <option value="--ar 4:3">4:3 (Standard Photo)</option>
                                        <option value="--ar 1:1">1:1 (Square / Social)</option>
                                        <option value="--ar 9:16">9:16 (Vertical / Stories)</option>
                                    </select>
                                </div>
                                <div>
                                    <label style="display:block; margin-bottom:8px; font-size:0.85rem; color:var(--text-secondary);">Stylize (Artistic Freedom)</label>
                                    <select id="mj-style" style="width:100%; padding:12px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:white;">
                                        <option value="--stylize 100">Default (100) - Balanced</option>
                                        <option value="--stylize 250">Medium (250) - More Artistic</option>
                                        <option value="--stylize 750">High (750) - Very Creative</option>
                                    </select>
                                </div>
                            </div>

                            <button class="btn btn-primary" onclick="app.openMidjourney()" style="width:100%; padding:16px; background:#5865F2; border:none; justify-content:center; font-size:1rem;">
                                <i data-lucide="send" style="width:20px;"></i> Generate in Discord
                            </button>
                        </div>
                    `;
                }

                if (activeTool === 'runway') {
                    return `
                        ${backButton}
                        <div class="card" style="height:calc(100vh - 240px); display:flex; flex-direction:column; background:linear-gradient(145deg, rgba(236, 72, 153, 0.1), rgba(15, 23, 42, 0.4)); border:1px solid rgba(236, 72, 153, 0.3); position:relative; overflow:hidden;">
                            <input type="text" value="Gen-3 Alpha" style="position:absolute; top:0; right:0; width:auto; padding:8px 16px; background:#ec4899; color:white; font-weight:bold; font-size:0.75rem; border:none; border-bottom-left-radius:12px; text-align:center;" readonly>

                            <div style="display:flex; align-items:center; gap:16px; margin-bottom:30px;">
                                <div style="width:64px; height:64px; background:white; border-radius:16px; display:flex; align-items:center; justify-content:center;">
                                    <div style="width:40px; height:40px; background:#ec4899; border-radius:50%;"></div>
                                </div>
                                <div>
                                    <h2 style="margin:0;">RunwayML / Luma</h2>
                                    <p style="font-size:0.9rem; color:var(--text-secondary);">Video Animation & Motion Graphics</p>
                                </div>
                            </div>

                             <div style="flex:1; display:flex; flex-direction:column; justify-content:center; gap:32px;">
                                <div style="border:3px dashed rgba(236, 72, 153, 0.3); border-radius:20px; padding:60px 20px; text-align:center; cursor:pointer; transition:all 0.2s;" 
                                     onclick="app.openRunway()"
                                     onmouseover="this.style.borderColor='#ec4899'; this.style.background='rgba(236, 72, 153, 0.05)'" 
                                     onmouseout="this.style.borderColor='rgba(236, 72, 153, 0.3)'; this.style.background='transparent'">
                                    <i data-lucide="upload-cloud" style="width:64px; height:64px; color:#ec4899; margin-bottom:16px;"></i>
                                    <div style="font-size:1.2rem; font-weight:600; color:#white; margin-bottom:8px;">Animate Still Image</div>
                                    <div style="font-size:0.9rem; color:var(--text-secondary);">Upload a render to generate a 5s flythrough</div>
                                </div>

                                <div>
                                     <div style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:16px; text-align:center;">Recommended Tools:</div>
                                     <div style="display:flex; gap:16px; justify-content:center;">
                                        <button class="btn btn-outline" style="min-width:150px; justify-content:center;" onclick="window.open('https://runwayml.com', '_blank')">Runway Gen-3</button>
                                        <button class="btn btn-outline" style="min-width:150px; justify-content:center;" onclick="window.open('https://lumalabs.ai/dream-machine', '_blank')">Luma Dream Machine</button>
                                     </div>
                                </div>
                            </div>
                        </div>
                    `;
                }

                if (activeTool === 'krea') {
                    return `
                        ${backButton}
                        <div class="card" style="height:calc(100vh - 240px); display:flex; flex-direction:column; background:linear-gradient(145deg, rgba(16, 185, 129, 0.1), rgba(15, 23, 42, 0.4)); border:1px solid rgba(16, 185, 129, 0.3); position:relative; overflow:hidden;">
                            <input type="text" value="Enhancer" style="position:absolute; top:0; right:0; width:auto; padding:8px 16px; background:#10b981; color:white; font-weight:bold; font-size:0.75rem; border:none; border-bottom-left-radius:12px; text-align:center;" readonly>
                            
                            <div style="display:flex; align-items:center; gap:16px; margin-bottom:30px;">
                                <div style="width:64px; height:64px; background:white; border-radius:16px; display:flex; align-items:center; justify-content:center;">
                                    <div style="width:40px; height:40px; background:#10b981; border-radius:50%;"></div>
                                </div>
                                <div>
                                    <h2 style="margin:0;">Krea AI / Magnific</h2>
                                    <p style="font-size:0.9rem; color:var(--text-secondary);">Upscale & Real-time Rendering</p>
                                </div>
                            </div>

                            <div style="padding:32px; background:rgba(0,0,0,0.2); border-radius:16px; margin-bottom:32px; text-align:center;">
                                <p style="font-size:1.1rem; color:#d1d5db; margin-bottom:24px; line-height:1.6;">
                                    "Turn sketchUp screenshots into <strong>Photorealism</strong> in seconds."
                                </p>
                                <div style="display:flex; flex-direction:column; gap:16px; color:var(--text-secondary); text-align:left; max-width:400px; margin:0 auto;">
                                    <div style="display:flex; align-items:center; gap:12px;"><i data-lucide="check" style="color:#10b981;"></i> 4K / 8K Upscaling</div>
                                    <div style="display:flex; align-items:center; gap:12px;"><i data-lucide="check" style="color:#10b981;"></i> Style Transfer</div>
                                    <div style="display:flex; align-items:center; gap:12px;"><i data-lucide="check" style="color:#10b981;"></i> Real-time generation</div>
                                </div>
                            </div>

                            <button class="btn btn-primary" onclick="window.open('https://www.krea.ai/', '_blank')" style="width:100%; padding:20px; background:#10b981; border:none; justify-content:center; font-size:1.1rem; margin-top:auto;">
                                <i data-lucide="external-link" style="width:20px;"></i> Launch Krea AI
                            </button>
                        </div>
                    `;
                }

                if (activeTool === 'grok') {
                    return `
                        ${backButton}
                        <div class="card" style="height:calc(100vh - 240px); display:flex; flex-direction:column; background:linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.8)); border:1px solid rgba(255, 255, 255, 0.2); position:relative; overflow:hidden;">
                             <input type="text" value="Beta" style="position:absolute; top:0; right:0; width:auto; padding:8px 16px; background:white; color:black; font-weight:bold; font-size:0.75rem; border:none; border-bottom-left-radius:12px; text-align:center;" readonly>

                            <div style="display:flex; align-items:center; gap:16px; margin-bottom:30px;">
                                <div style="width:64px; height:64px; background:black; border:1px solid rgba(255,255,255,0.2); border-radius:16px; display:flex; align-items:center; justify-content:center;">
                                    <span style="font-size:2.5rem; font-weight:bold; color:white;">𝕏</span>
                                </div>
                                <div>
                                    <h2 style="margin:0;">Grok (xAI)</h2>
                                    <p style="font-size:0.9rem; color:var(--text-secondary);">Real-time Market Research</p>
                                </div>
                            </div>

                            <div style="padding:32px; background:rgba(0,0,0,0.5); border-radius:16px; margin-bottom:32px; border:1px solid rgba(255,255,255,0.1);">
                                <h4 style="margin-bottom:16px; color:white;">Why use Grok?</h4>
                                <ul style="list-style:none; padding:0; display:grid; gap:16px;">
                                    <li style="display:flex; gap:12px; color:#d1d5db;"><i data-lucide="zap" style="color:white;"></i> Access to real-time X (Twitter) posts.</li>
                                    <li style="display:flex; gap:12px; color:#d1d5db;"><i data-lucide="search" style="color:white;"></i> Analyze competitor activity during show days.</li>
                                    <li style="display:flex; gap:12px; color:#d1d5db;"><i data-lucide="trending-up" style="color:white;"></i> Spot trending topics in the industry.</li>
                                </ul>
                            </div>

                            <button class="btn btn-primary" onclick="window.open('https://grok.x.ai/', '_blank')" style="width:100%; padding:20px; background:white; color:black; border:none; justify-content:center; font-weight:bold; font-size:1.1rem; margin-top:auto;">
                                <i data-lucide="message-square" style="width:20px;"></i> Chat with Grok
                            </button>
                        </div>
                    `;
                }
            }

            // --- 2. Default Grid View (Launcher) ---
            const launcherCard = (id, color, iconHtml, title, desc, tag) => `
                <div class="card" onclick="app.state.activeCreativeTool='${id}'; app.renderKnowledgeCenter('generators')" 
                     style="background:linear-gradient(145deg, ${color}20, rgba(15, 23, 42, 0.6)); 
                            border:1px solid ${color}40; 
                            cursor:pointer; 
                            transition:all 0.3s;
                            display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;
                            position:relative; overflow:hidden;"
                     onmouseover="this.style.borderColor='${color}'; this.style.transform='scale(1.02)'"
                     onmouseout="this.style.borderColor='${color}40'; this.style.transform='scale(1)'">
                    
                    ${tag ? `<div style="position:absolute; top:16px; right:16px; padding:4px 10px; background:${color}; color:white; font-size:0.7rem; font-weight:bold; border-radius:20px;">${tag}</div>` : ''}

                    <div style="width:80px; height:80px; background:${id === 'grok' ? 'black' : 'white'}; border-radius:20px; display:flex; align-items:center; justify-content:center; margin-bottom:20px; box-shadow:0 10px 25px -5px ${color}60;">
                        ${iconHtml}
                    </div>
                    <h2 style="margin-bottom:8px; font-size:1.5rem;">${title}</h2>
                    <p style="color:var(--text-secondary); max-width:80%; line-height:1.4;">${desc}</p>
                </div>
            `;

            return `
                 <div style="display:flex; justify-content:space-between; margin-bottom:24px; align-items:center;">
                    <div>
                        <h3>Creative AI Studio</h3>
                        <p style="font-size:0.9rem; color:var(--text-secondary);">Next-Gen Design & Research Agents</p>
                    </div>
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap:24px; height:calc(100vh - 220px);">
                    
                    ${launcherCard(
                'midjourney',
                '#5865F2',
                '<img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Midjourney_Emblem.png" style="width:50px;">',
                'Midjourney',
                'High-end architectural rendering and concept art.',
                'v6.0'
            )}

                    ${launcherCard(
                'runway',
                '#ec4899',
                '<div style="width:50px; height:50px; background:#ec4899; border-radius:50%;"></div>',
                'Runway / Luma',
                'Video generation and image-to-video animation.',
                'Gen-3'
            )}

                    ${launcherCard(
                'krea',
                '#10b981',
                '<div style="width:50px; height:50px; background:#10b981; border-radius:50%;"></div>',
                'Krea AI',
                'Real-time upscaling and enhancement for client assets.',
                'New'
            )}

                    ${launcherCard(
                'grok',
                '#ffffff',
                '<span style="font-size:3rem; font-weight:bold; color:white;">𝕏</span>',
                'Grok (xAI)',
                'Live market intelligence and competitor analysis.',
                'Beta'
            )}

                </div>
            `;
        }
    },

    openMidjourney: () => {
        const prompt = document.getElementById('mj-prompt').value;
        const ar = document.getElementById('mj-ar').value;
        const style = document.getElementById('mj-style').value;

        const fullPrompt = `${prompt} ${ar} ${style}`;

        // Copy to clipboard
        navigator.clipboard.writeText(fullPrompt).then(() => {
            alert('Prompt copied to clipboard! Redirecting to Discord...');
            window.open('https://discord.com/channels/@me', '_blank');
        });
    },

    openRunway: () => {
        window.open('https://app.runwayml.com/', '_blank');
    },

    editShow: (name) => {
        const show = app.state.showDatabase.find(s => s.name === name);
        if (!show) return;

        document.getElementById('edit-show-name').value = show.name;
        document.getElementById('edit-show-manual').value = show.manual || '';
        document.getElementById('edit-show-floorplan').value = show.floorplan || '';
        document.getElementById('edit-show-venue-map').value = show.venueMap || show.map || ''; // Fallback for backward compatibility

        document.getElementById('show-modal').showModal();
    },

    saveShow: () => {
        const name = document.getElementById('edit-show-name').value;
        const show = app.state.showDatabase.find(s => s.name === name);
        if (show) {
            show.manual = document.getElementById('edit-show-manual').value;
            show.floorplan = document.getElementById('edit-show-floorplan').value;
            show.venueMap = document.getElementById('edit-show-venue-map').value;
            // Update legacy map field just in case
            if (!show.map) show.map = show.venueMap;

            // Sort chronologically again in case it was a new show (though we are just editing)
            app.state.showDatabase.sort((a, b) => new Date(a.setup) - new Date(b.setup));

            app.saveShows(); // Persist to LocalStorage
            app.renderKnowledgeCenter(); // Refresh view
            document.getElementById('show-modal').close();
        }
    },

    saveShows: () => {
        localStorage.setItem('pe_shows', JSON.stringify(app.state.showDatabase));
    },

    // Helper function to get status color
    getStatusColor: (status) => {
        const colors = {
            'New': '#6366f1',
            'Briefing': '#8b5cf6',
            'Planning': '#3b82f6',
            'Proposal': '#06b6d4',
            'Quote': '#0891b2',
            'Design': '#8b5cf6',
            'Production': '#f59e0b',
            'Active': '#10b981',
            'Finished': '#6b7280'
        };
        return colors[status] || '#6b7280';
    },

    // Helper function to calculate price with margin
    getCalculatedPrice: (cost, margin) => {
        return cost * (1 + parseFloat(margin || 0));
    },

    // Format YYYY-MM-DD to DD/MM/YYYY
    formatDate: (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        if (isNaN(date)) return dateStr;
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },

    // Updated Price Logic: Cost * (1 + Margin)
    calculatePrice: (cost, margin) => {
        return cost * (1 + parseFloat(margin));
    },

    formatCurrency: (amount) => {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount);
    },

    renderDashboard: () => {
        const content = document.getElementById('content-area');

        // Calculate pending tasks and urgent deadlines
        const today = new Date().toISOString().split('T')[0];

        // Auto-update project status based on event start date
        let statusUpdated = false;

        app.state.projects.forEach(p => {
            // Skip if already finished
            if (p.status === 'Finished') return;

            // Find the event in showDatabase to get the start date
            const evtName = p.event.replace(new RegExp(`^${p.client}\\\\s*@\\\\s*`, 'i'), '').trim();
            const showData = app.state.showDatabase.find(s => s.name.toLowerCase().includes(evtName.toLowerCase()));

            // If we found the show and its start date has passed, mark as Finished
            if (showData && showData.start && showData.start < today) {
                p.status = 'Finished';
                statusUpdated = true;
            }
        });

        // Save if any status was updated
        if (statusUpdated) {
            app.saveProjects();
        }

        // Filter: Active projects (started in the future or not finished)
        // User says: Past projects store in Finished category. 
        const activeProjects = app.state.projects.filter(p => p.status !== 'Finished' && (p.setupDate || '') >= today);
        const finishedProjects = app.state.projects.filter(p => p.status === 'Finished' || (p.setupDate || '') < today);

        const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);
        const nextWeekStr = nextWeek.toISOString().split('T')[0];

        let pendingTasksCount = 0;
        const urgentDeadlines = [];

        activeProjects.forEach(p => {
            if (p.tasks) {
                p.tasks.forEach(t => {
                    if (!t.done) {
                        pendingTasksCount++;
                        if (t.deadline <= nextWeekStr) {
                            urgentDeadlines.push({ ...t, project: p.client + ' @ ' + p.event, projectId: p.id });
                        }
                    }
                });
            }
        });

        urgentDeadlines.sort((a, b) => a.deadline.localeCompare(b.deadline));

        content.innerHTML = `
            <div class="card" style="margin-bottom:24px;">
                <h2>${app.t('welcome')}</h2>
                <div style="padding: 10px 0; color: var(--text-secondary);">
                    Manage your projects and generate quotes with custom margins.
                </div>
                <div style="display:flex; gap:12px;">
                     <button class="btn btn-primary" onclick="app.newQuote()">${app.t('start_quote')}</button>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-label">${app.t('total_quotes')}</div>
                    <div class="stat-value">${app.state.quotes.length}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">${app.t('active_projects')}</div>
                    <div class="stat-value">${activeProjects.length}</div>
                </div>
                <div class="stat-card" onclick="app.showComparativa()" style="cursor:pointer; border:1px solid var(--accent); background:rgba(59, 130, 246, 0.1);">
                    <div class="stat-label">Project Comparativa</div>
                    <div class="stat-value" style="font-size:1.5rem; color:var(--accent);">2026 Data <i data-lucide="bar-chart-2" style="width:18px; vertical-align:middle;"></i></div>
                </div>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px; margin-top:24px;">
                <!-- Projects Highlight (Future/Active Only) -->
                <div class="card">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                        <h3>Active Projects</h3>
                        <button class="btn btn-outline btn-sm" onclick="app.navigate('projects')">${app.t('view_all_projects')}</button>
                    </div>
                    <div style="display:grid; gap:12px;">
                        ${activeProjects.slice(0, 5).map(p => `
                            <div class="glass" style="padding:12px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; position:relative;">
                                <div onclick="app.navigate('projects')" style="flex:1; cursor:pointer;">
                                    <div style="font-weight:bold;">${p.client}</div>
                                    <div style="font-size:0.8rem; color:var(--text-secondary);">${p.event}</div>
                                </div>
                                <div style="text-align:right; display:flex; align-items:center; gap:12px;">
                                    <div>
                                        <div style="font-size:0.8rem; color:var(--accent);">${app.formatDate(p.setupDate)}</div>
                                        <div style="font-size:0.7rem; color:var(--text-secondary);">${p.status}</div>
                                    </div>
                                    <button onclick="app.deleteProject(${p.id})" style="background:none; border:none; color:var(--danger); cursor:pointer; padding:4px;" title="Delete Project">
                                        <i data-lucide="trash-2" style="width:14px; height:14px;"></i>
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Urgent Deadlines -->
                <div class="card">
                    <h3 style="margin-bottom:20px;">${app.t('urgent_deadlines')}</h3>
                    <div style="display:grid; gap:12px;">
                        ${urgentDeadlines.length === 0 ? `
                            <div style="text-align:center; padding:20px; color:var(--text-secondary);">
                                <i data-lucide="check-circle" style="width:32px; height:32px; margin-bottom:12px; opacity:0.5;"></i>
                                <p>${app.t('no_urgent_deadlines')}</p>
                            </div>
                        ` : urgentDeadlines.slice(0, 5).map(d => {
            const isOverdue = d.deadline < today;
            return `
                                <div class="glass" style="padding:12px; border-radius:8px; border-left: 4px solid ${isOverdue ? 'var(--danger)' : 'var(--warning)'}; display:flex; justify-content:space-between; align-items:center;">
                                    <div onclick="app.navigate('projects')" style="flex:1; cursor:pointer;">
                                        <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:4px;">
    <span style="font-size:0.85rem; font-weight:bold; color:${isOverdue ? 'var(--danger)' : 'var(--warning)'};">
    ${isOverdue ? app.t('overdue') : app.t('due_soon')}
    </span>
    <span style="font-size:0.8rem; color:var(--text-secondary);">${app.formatDate(d.deadline)}</span>
                                        </div>
                                        <div style="font-size:0.9rem; margin-bottom:2px;">${d.name}</div>
                                        <div style="font-size:0.75rem; color:var(--text-secondary);">${d.project}</div>
                                    </div>
                                    <button onclick="app.deleteTaskById('${d.projectId}', '${d.name}')" style="background:none; border:none; color:var(--danger); cursor:pointer; padding:8px; opacity:0.5; transition:opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.5">
                                        <i data-lucide="trash-2" style="width:16px;"></i>
                                    </button>
                                </div>
                            `;
        }).join('')}
                    </div>
                </div>
            </div>


        `;
        lucide.createIcons();
    },

    renderTradeshows: (yearFilter) => {
        const content = document.getElementById('content-area');
        const shows = app.state.showDatabase;
        // Extract distinct years, sorted descending
        const years = [...new Set(shows.map(s => s.setup ? s.setup.split('-')[0] : ''))].filter(y => y).sort().reverse();

        // Extract Filter Options
        const countries = [...new Set(shows.map(s => s.country).filter(Boolean))].sort();
        const venues = [...new Set(shows.map(s => s.venue).filter(Boolean))].sort();

        // Determine active year: Filter -> Current -> First Available
        const currentYear = new Date().getFullYear().toString();
        let activeYear = yearFilter || app.state.lastTradeshowYear || (years.includes(currentYear) ? currentYear : (years[0] || currentYear));

        // Save state
        app.state.lastTradeshowYear = activeYear;

        // Apply Filters
        const filters = app.state.tradeshowFilters || { country: '', venue: '', month: '' };

        const filteredShows = shows.filter(s => {
            const matchYear = s.setup && s.setup.startsWith(activeYear);
            const matchCountry = !filters.country || s.country === filters.country;
            const matchVenue = !filters.venue || s.venue === filters.venue;
            // Month filter: extract month from setup date (format: YYYY-MM-DD)
            const matchMonth = !filters.month || (s.setup && s.setup.split('-')[1] === filters.month);
            return matchYear && matchCountry && matchVenue && matchMonth;
        });

        content.innerHTML = `
            <div style="margin-bottom:24px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                    <h2>${app.t('tradeshows')} & Regulations</h2>
                    
                    <!-- Year Tabs -->
                    <div style="display:flex; gap:8px; background:rgba(255,255,255,0.05); padding:4px; border-radius:8px;">
                        ${years.map(y => `
                            <button onclick="app.renderTradeshows('${y}')" 
                                style="background:${y === activeYear ? 'var(--accent)' : 'transparent'}; 
                                       color:${y === activeYear ? 'white' : 'var(--text-secondary)'}; 
                                       border:none; padding:6px 16px; border-radius:6px; cursor:pointer; font-weight:600; transition:all 0.2s;">
                                ${y}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Secondary Filters -->
                <div class="glass" style="padding:16px; border-radius:12px; display:flex; gap:16px; align-items:center; margin-bottom:24px; background:rgba(255,255,255,0.02);">
                    <div style="font-weight:600; font-size:0.9rem; color:var(--text-secondary);"><i data-lucide="filter" style="width:14px; vertical-align:middle;"></i> Filter Regulations</div>
                    <select onchange="app.setTradeshowFilter('country', this.value)" style="padding:8px; border-radius:8px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; outline:none; cursor:pointer; min-width:150px;">
                        <option value="">All Countries</option>
                        ${countries.map(c => `<option value="${c}" ${filters.country === c ? 'selected' : ''}>${c}</option>`).join('')}
                    </select>
                    <select onchange="app.setTradeshowFilter('month', this.value)" style="padding:8px; border-radius:8px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; outline:none; cursor:pointer; min-width:150px;">
                        <option value="">All Months</option>
                        <option value="01" ${filters.month === '01' ? 'selected' : ''}>January</option>
                        <option value="02" ${filters.month === '02' ? 'selected' : ''}>February</option>
                        <option value="03" ${filters.month === '03' ? 'selected' : ''}>March</option>
                        <option value="04" ${filters.month === '04' ? 'selected' : ''}>April</option>
                        <option value="05" ${filters.month === '05' ? 'selected' : ''}>May</option>
                        <option value="06" ${filters.month === '06' ? 'selected' : ''}>June</option>
                        <option value="07" ${filters.month === '07' ? 'selected' : ''}>July</option>
                        <option value="08" ${filters.month === '08' ? 'selected' : ''}>August</option>
                        <option value="09" ${filters.month === '09' ? 'selected' : ''}>September</option>
                        <option value="10" ${filters.month === '10' ? 'selected' : ''}>October</option>
                        <option value="11" ${filters.month === '11' ? 'selected' : ''}>November</option>
                        <option value="12" ${filters.month === '12' ? 'selected' : ''}>December</option>
                    </select>
                    <select onchange="app.setTradeshowFilter('venue', this.value)" style="padding:8px; border-radius:8px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; outline:none; cursor:pointer; min-width:150px;">
                        <option value="">All Venues</option>
                        ${venues.map(v => `<option value="${v}" ${filters.venue === v ? 'selected' : ''}>${v}</option>`).join('')}
                    </select>
                    <button class="btn btn-outline btn-sm" onclick="app.setTradeshowFilter('reset')" style="margin-left:auto;">Reset</button>
                </div>

                <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:16px;">
                    ${filteredShows.length > 0 ? filteredShows.map(s => {
            // Branding Colors for Card Headers
            let color = '#3b82f6'; // default blue
            if (s.name.includes('MWC')) color = '#e11d48'; // red
            if (s.name.includes('ICE') || s.name.includes('iGB')) color = '#fbbf24'; // amber
            if (s.name.includes('ISE') || s.name.includes('IMCAS')) color = '#8b5cf6'; // purple
            if (s.name.includes('PCR') || s.name.includes('EAU')) color = '#10b981'; // green

            return `
                        <div class="card" style="border-top:4px solid ${color}; transition: transform 0.2s; position:relative;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="display:flex; justify-content:space-between; align-items:start;">
                                <h3 style="margin:0; font-size:1.1rem;">${s.name.toUpperCase()}</h3>
                                <div style="padding:2px 8px; background:${color}; color:black; font-weight:bold; border-radius:10px; font-size:0.7rem;">${s.setup.split('-').slice(1).join('/')}</div>
                            </div>
                            
                            <p style="color:var(--text-secondary); margin:12px 0 16px 0; font-size:0.9rem; line-height:1.5;">
                                <i data-lucide="map-pin" style="width:14px; margin-right:4px; vertical-align:middle; color:${color};"></i> ${s.venue}, ${s.country}<br>
                                <i data-lucide="calendar" style="width:14px; margin-right:4px; vertical-align:middle; color:${color};"></i> Setup starts: ${s.setup}
                            </p>

                            <div style="display:grid; gap:8px; margin-top:auto;">
                                <a href="${s.manual || '#'}" target="_blank" class="btn btn-outline btn-sm" style="justify-content:start;">
                                    <i data-lucide="book" style="width:14px;"></i> Manual
                                </a>
                                <a href="${s.floorplan || '#'}" target="_blank" class="btn btn-outline btn-sm" style="justify-content:start;">
                                    <i data-lucide="grid" style="width:14px;"></i> Floorplan
                                </a>
                                <a href="${s.venueMap || s.map || '#'}" target="_blank" class="btn btn-outline btn-sm" style="justify-content:start; opacity:0.8;">
                                    <i data-lucide="map" style="width:14px;"></i> Venue Map
                                </a>
                            </div>
                        </div>
                    `}).join('') : `<div style="grid-column:1/-1; text-align:center; color:var(--text-secondary); padding:40px;">No tradeshows found for ${activeYear} matching filters.</div>`}
                </div>
            </div>
        `;
        lucide.createIcons();
    },

    setTradeshowFilter: (type, val) => {
        if (!app.state.tradeshowFilters) app.state.tradeshowFilters = { country: '', venue: '', month: '' };

        if (type === 'reset') {
            app.state.tradeshowFilters = { country: '', venue: '', month: '' };
        } else {
            app.state.tradeshowFilters[type] = val;
        }
        app.renderTradeshows();
    },

    renderClients: () => {
        const content = document.getElementById('content-area');

        // Aggregate Client Data with more details
        const clientData = {};
        app.state.projects.forEach(p => {
            if (!p.client) return;
            const name = p.client.toUpperCase();
            if (!clientData[name]) {
                clientData[name] = {
                    projects: [],
                    shows: new Set(),
                    totalSqm: 0,
                    quotes: [],
                    files: []
                };
            }
            clientData[name].projects.push(p);
            const show = p.tradeshow || (p.event.includes('@') ? p.event.split('@')[1] : p.event) || '';
            if (show) clientData[name].shows.add(show.trim().toUpperCase());
            clientData[name].totalSqm += (p.sqm || 0);

            // Find related quotes
            const relatedQuotes = app.state.quotes.filter(q => q.projectId == p.id);
            clientData[name].quotes.push(...relatedQuotes);
        });

        const sortedClients = Object.keys(clientData).sort();

        content.innerHTML = `
            <div style="margin-bottom:24px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                    <h2>${app.t('clients')}</h2>
                    <div style="color:var(--text-secondary); font-size:0.9rem;">
                        <i data-lucide="users" style="width:16px; vertical-align:middle;"></i> ${sortedClients.length} Active Clients
                    </div>
                </div>
                <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap:20px;">
                    ${sortedClients.length > 0 ? sortedClients.map(c => {
            const data = clientData[c];
            const activeProjects = data.projects.filter(p => p.status !== 'Finished').length;
            const totalQuoteValue = data.quotes.reduce((sum, q) => {
                const subtotal = q.items.reduce((s, i) => s + (i.price * i.qty), 0);
                return sum + subtotal * (1 + (q.vat || 0.21));
            }, 0);

            return `
                        <div class="card" style="border-top:4px solid var(--accent); transition: transform 0.2s; position:relative;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:16px;">
                                <div>
                                    <h3 style="margin:0 0 8px 0;">${c}</h3>
                                    <div style="display:flex; gap:12px; font-size:0.85rem; color:var(--text-secondary);">
                                        <span><i data-lucide="briefcase" style="width:12px; vertical-align:middle;"></i> ${data.projects.length} Projects</span>
                                        <span><i data-lucide="maximize" style="width:12px; vertical-align:middle;"></i> ${data.totalSqm} m²</span>
                                    </div>
                                </div>
                                ${activeProjects > 0 ? `<span style="background:var(--success); color:white; padding:4px 10px; border-radius:12px; font-size:0.7rem; font-weight:bold;">Active</span>` : ''}
                            </div>
                            
                            <!-- Event History -->
                            <div style="margin-bottom:16px;">
                                <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px; font-weight:600;">Event History:</div>
                                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                    ${[...data.shows].map(s => `
                                        <span style="background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:4px; font-size:0.8rem; border:1px solid var(--glass-border);">${s}</span>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <!-- Quotations Section -->
                            <div style="margin-bottom:16px; padding:12px; background:rgba(59, 130, 246, 0.1); border-radius:8px; border:1px solid rgba(59, 130, 246, 0.2);">
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                    <div style="font-size:0.85rem; font-weight:600; color:var(--accent);">
                                        <i data-lucide="file-text" style="width:14px; vertical-align:middle;"></i> Quotations
                                    </div>
                                    <div style="font-size:0.9rem; font-weight:bold; color:white;">${app.formatCurrency(totalQuoteValue)}</div>
                                </div>
                                ${data.quotes.length > 0 ? `
                                    <div style="display:grid; gap:6px; margin-top:8px;">
                                        ${data.quotes.slice(0, 3).map(q => `
                                            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; padding:6px; background:rgba(0,0,0,0.2); border-radius:4px; cursor:pointer;" onclick="app.viewQuote('${q.id}')" onmouseover="this.style.background='rgba(0,0,0,0.4)'" onmouseout="this.style.background='rgba(0,0,0,0.2)'">
                                                <span>${q.client || c} - ${q.event || 'Quote'}</span>
                                                <span style="color:var(--success);">${app.formatCurrency(q.items.reduce((s, i) => s + (i.price * i.qty), 0))}</span>
                                            </div>
                                        `).join('')}
                                        ${data.quotes.length > 3 ? `<div style="font-size:0.75rem; color:var(--text-secondary); text-align:center; margin-top:4px;">+${data.quotes.length - 3} more</div>` : ''}
                                    </div>
                                ` : `
                                    <div style="font-size:0.8rem; color:var(--text-secondary); text-align:center; padding:8px;">No quotations yet</div>
                                `}
                            </div>
                            
                            <!-- Designs & Files Section -->
                            <div style="margin-bottom:16px; padding:12px; background:rgba(139, 92, 246, 0.1); border-radius:8px; border:1px solid rgba(139, 92, 246, 0.2);">
                                <div style="font-size:0.85rem; font-weight:600; color:#8b5cf6; margin-bottom:8px;">
                                    <i data-lucide="image" style="width:14px; vertical-align:middle;"></i> Designs & Files
                                </div>
                                ${data.files.length > 0 ? `
                                    <div style="display:grid; gap:6px;">
                                        ${data.files.map(f => `
                                            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; padding:6px; background:rgba(0,0,0,0.2); border-radius:4px;">
                                                <span><i data-lucide="file" style="width:12px; vertical-align:middle;"></i> ${f.name}</span>
                                                <button class="btn btn-sm" style="padding:2px 8px; font-size:0.7rem;" onclick="window.open('${f.url}', '_blank')">View</button>
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : `
                                    <div style="font-size:0.8rem; color:var(--text-secondary); text-align:center; padding:8px;">No files uploaded</div>
                                `}
                                <button class="btn btn-outline btn-sm" onclick="app.uploadClientFile('${c}')" style="width:100%; margin-top:8px; justify-content:center; font-size:0.8rem;">
                                    <i data-lucide="upload" style="width:12px;"></i> Upload File
                                </button>
                            </div>
                            
                            <!-- Action Buttons -->
                            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                                <button class="btn btn-outline btn-sm" onclick="app.viewClientDetails('${c}')" style="justify-content:center;">
                                    <i data-lucide="eye" style="width:14px;"></i> View Details
                                </button>
                                <button class="btn btn-primary btn-sm" onclick="app.newQuoteForClient('${c}')" style="justify-content:center;">
                                    <i data-lucide="plus" style="width:14px;"></i> New Quote
                                </button>
                            </div>
                        </div>
                    `}).join('') : `<div style="grid-column:1/-1; text-align:center; color:var(--text-secondary); padding:40px;">No client history found in projects data.</div>`}
                </div>
            </div>
        `;
        lucide.createIcons();
    },

    uploadClientFile: (clientName) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pdf,.jpg,.jpeg,.png,.dwg';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                // In a real app, upload to Firebase Storage
                alert(`File "${file.name}" will be uploaded for client ${clientName}.\n\nNote: File upload to Firebase Storage will be implemented when deployed.`);
                // TODO: Implement Firebase Storage upload
            }
        };
        input.click();
    },

    viewClientDetails: (clientName) => {
        // Navigate to a detailed client view
        alert(`Detailed view for ${clientName} will be implemented.\n\nThis will show:\n- Full project history\n- All quotations\n- Contact information\n- Files and designs\n- Communication history`);
        // TODO: Implement detailed client view
    },

    newQuoteForClient: (clientName) => {
        app.state.currentQuote.client = clientName;
        app.navigate('quotation');
    },

    viewQuote: (quoteId) => {
        // Find and load the quote
        const quote = app.state.quotes.find(q => q.id === quoteId);
        if (quote) {
            app.state.currentQuote = quote;
            app.navigate('quotation');
        }
    },


    renderTariffs: () => {
        const content = document.getElementById('content-area');

        // State Filters for Tariffs
        const filterCat = app.state.tariffFilterCategory || 'All';
        const searchQuery = app.state.tariffSearch || '';

        // Extract Categories (Static + Dynamic)
        const baseCategories = ['All', 'Construction', 'Electrical', 'Graphics', 'AV', 'Furniture', 'Logistics', 'Venue Services'];
        // Ensure we don't duplicate
        const categories = [...baseCategories];
        app.state.tariffs.forEach(t => {
            if (t.Category && !categories.includes(t.Category) && t.Category !== 'Other') categories.push(t.Category);
        });
        if (!categories.includes('Other')) categories.push('Other');

        // Filter Data
        let filteredTariffs = app.state.tariffs.filter(t => {
            const matchesCat = filterCat === 'All' || (t.Category && t.Category === filterCat);
            const matchesSearch = searchQuery === '' || (t.Description && t.Description.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCat && matchesSearch;
        });

        // 1. EMPTY STATE (No database loaded)
        if (app.state.tariffs.length === 0) {
            content.innerHTML = `
                <div class="card">
                    <h2>Import Tariffs (Cost Sheet)</h2>
                    <p style="margin-bottom:20px; color:var(--text-secondary)">Upload your "TARIFAS GUALOGA 2023.xlsx" to load cost prices.</p>
                    
                    <div class="upload-area" onclick="document.getElementById('file-input').click()">
                        <input type="file" id="file-input" hidden accept=".xlsx, .xls, .csv" onchange="app.handleFileUpload(this)">
                        <i data-lucide="upload-cloud" style="width: 48px; height: 48px; color: var(--accent); margin-bottom: 16px;"></i>
                        <h3>Click to Upload Tariff File</h3>
                        <p style="color:var(--text-secondary)">Supports .xlsx, .xls</p>
                    </div>
                    
                    <div style="margin-top:24px; text-align:center; padding-top:20px; border-top:1px solid var(--glass-border);">
                        <p style="margin-bottom:12px; font-size:0.9rem;">Browser Security prevents auto-loading local files.</p>
                        <button class="btn btn-outline" onclick="app.loadDemoData()">
                             Load Demo/Test Data Instead
                        </button>
                    </div>
                </div>
            `;
        } else {
            // 2. DATA TABLE WITH FILTERS
            // Pagination Limit
            const limit = 200;
            const displayTariffs = filteredTariffs.slice(0, limit);

            content.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 24px;">
                     <div>
                        <h2>Tariff Database</h2>
                         <div style="display:flex; gap:8px; margin-top:12px; flex-wrap:wrap;">
                            ${baseCategories.slice(1, 7).map(c => `
                                <button class="btn btn-sm ${filterCat === c ? 'btn-primary' : 'btn-outline'}" onclick="app.setTariffFilter('${c}')" style="font-size:0.8rem;">${c}</button>
                            `).join('')}
                            <select onchange="app.setTariffFilter(this.value)" style="padding:6px; background:var(--bg-dark); color:white; border:1px solid var(--glass-border); border-radius:8px; outline:none; font-size:0.8rem;">
                                <option value="All">More Categories...</option>
                                ${categories.map(c => `<option value="${c}" ${filterCat === c ? 'selected' : ''}>${c}</option>`).join('')}
                            </select>
                        </div>
                     </div>
                     <div style="display:flex; gap:12px; align-items:center;">
                        <div style="position:relative;">
                            <i data-lucide="search" style="position:absolute; left:10px; top:10px; width:16px; color:var(--text-secondary);"></i>
                            <input type="text" placeholder="Search..." value="${searchQuery}" oninput="app.setTariffSearch(this.value)" 
                                style="padding:8px 8px 8px 36px; border-radius:8px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; width:200px;">
                        </div>
                        <button class="btn btn-outline" onclick="app.setTariffFilter('All')" title="Reset Filters"><i data-lucide="rotate-ccw" style="width:16px;"></i></button>
                     </div>
                </div>

                <div class="card" style="padding:0; overflow:hidden;">
                    <div class="table-container" style="max-height:65vh; overflow-y:auto;">
                        <table style="width:100%; border-collapse:collapse;">
                            <thead style="position:sticky; top:0; background:var(--bg-card); z-index:10;">
                                <tr style="text-align:left; border-bottom:1px solid var(--glass-border);">
                                    <th style="padding:16px;">Description</th>
                                    <th style="padding:16px;">Unit</th>
                                    <th style="padding:16px;">Category</th>
                                    <th style="padding:16px; text-align:right;">Cost Price</th>
                                    <th style="padding:16px; text-align:right;">Simulated Sales (+35%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${displayTariffs.length > 0 ? displayTariffs.map((item, i) => {
                const cost = Number(item.Price) || 0;
                const sales = app.calculatePrice(cost, 0.35);
                return `
                                    <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
                                        <td style="padding:10px 16px; font-size:0.9rem;">${item.Description || '-'}</td>
                                        <td style="padding:10px 16px; color:var(--text-secondary); font-size:0.85rem;">${item.Unit || '-'}</td>
                                        <td style="padding:10px 16px;"><span style="font-size:0.75rem; padding:2px 8px; background:rgba(255,255,255,0.1); border-radius:8px;">${item.Category || 'Other'}</span></td>
                                        <td style="padding:10px 16px; text-align:right; color:var(--text-secondary); font-family:monospace;">${app.formatCurrency(cost)}</td>
                                        <td style="padding:10px 16px; text-align:right; color:var(--success); font-weight:bold; font-family:monospace;">${app.formatCurrency(sales)}</td>
                                    </tr>
                                `}).join('') : '<tr><td colspan="5" style="text-align:center; padding:40px; color:var(--text-secondary);">No items found matching your filters.</td></tr>'}
                            </tbody>
                        </table>
                    </div>
                </div>
                 
                <div style="margin-top:12px; display:flex; justify-content:space-between; color:var(--text-secondary); font-size:0.8rem; padding:0 8px;">
                    <div>Showing ${displayTariffs.length} / ${filteredTariffs.length} items</div>
                    <div>
                         <button class="btn btn-sm btn-outline" style="border-color:var(--danger); color:var(--danger); padding:2px 8px; font-size:0.7rem;" onclick="app.clearTariffs()">Clear Database</button>
                    </div>
                </div>
            `;
        }
        lucide.createIcons();
    },

    setTariffFilter: (cat) => {
        app.state.tariffFilterCategory = cat;
        app.renderTariffs();
    },

    setTariffSearch: (q) => {
        app.state.tariffSearch = q;
        app.renderTariffs();
    },

    clearTariffs: () => {
        if (confirm("Clear all tariff data?")) {
            app.state.tariffs = [];
            localStorage.removeItem('pe_tariffs');
            app.renderTariffs();
        }
    },

    // Detailed Debugging for Upload
    handleFileUpload: (input) => {
        const file = input.files[0];
        if (!file) return;

        // Check if XLSX library is loaded
        if (typeof XLSX === 'undefined') {
            alert('Error: Excel library (SheetJS) is not loaded. Please check your internet connection.');
            return;
        }

        alert(`Reading file: ${file.name}...`);

        const reader = new FileReader();

        reader.onerror = (err) => {
            alert('Error reading file: ' + err);
            console.error(err);
        };

        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });

                if (!workbook.SheetNames.length) {
                    throw new Error("No sheets found in Excel file");
                }

                // Assume first sheet
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];

                // Find Header Row (heuristic)
                const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                let headerRowIndex = -1;

                // Look for common keywords in first 30 rows
                for (let i = 0; i < Math.min(rawData.length, 30); i++) {
                    const rowStr = rawData[i].map(c => String(c).toLowerCase()).join(' ');
                    if (rowStr.includes('concepto') || rowStr.includes('description') || rowStr.includes('precio') || rowStr.includes('price')) {
                        headerRowIndex = i;
                        break;
                    }
                }

                if (headerRowIndex === -1) {
                    if (!confirm("Could not automatically find a header row (looking for 'Concepto' or 'Precio'). Try to load from the first row?")) {
                        return;
                    }
                    headerRowIndex = 0;
                }

                console.log('Header found at index:', headerRowIndex);

                const json = XLSX.utils.sheet_to_json(worksheet, {
                    range: headerRowIndex
                });

                // Normalize Data
                const normalizedData = json.map(row => {
                    const newRow = {};
                    Object.keys(row).forEach(key => {
                        const val = row[key];
                        const lowerKey = key.toLowerCase();

                        // Map Spanish/English terms to internal format
                        if (lowerKey.match(/concepto|descrip|item/)) newRow.Description = val;
                        else if (lowerKey.match(/precio|price|pvp|coste|cost/)) newRow.Price = val;
                        else if (lowerKey.match(/unidad|unit/)) newRow.Unit = val;
                        else if (lowerKey.match(/cat|fam/)) newRow.Category = val;
                        else newRow[key] = val; // Keep other info
                    });

                    // Cleanup
                    if (!newRow.Description && newRow['__EMPTY']) newRow.Description = newRow['__EMPTY'];

                    return newRow;
                }).filter(item => item.Description && (item.Price || item.Cost));

                if (normalizedData.length === 0) {
                    alert('No valid items found. Please check the Excel format.');
                    return;
                }

                app.state.tariffs = normalizedData;
                localStorage.setItem('pe_tariffs', JSON.stringify(normalizedData));

                alert(`Successfully loaded ${normalizedData.length} items!`);
                app.renderTariffs();

            } catch (error) {
                alert('Error processing Excel data: ' + error.message);
                console.error(error);
            }
        };
        reader.readAsArrayBuffer(file);
    },

    loadDemoData: () => {
        const demoData = [
            { Description: 'Silla Standard (Demo)', Unit: 'ud', Price: 25.00, Category: 'Furniture' },
            { Description: 'Mesa 120x80 (Demo)', Unit: 'ud', Price: 45.00, Category: 'Furniture' },
            { Description: 'Pantalla LED 55" (Demo)', Unit: 'ud', Price: 350.00, Category: 'AV' },
            { Description: 'Cable HDMI 5m (Demo)', Unit: 'ud', Price: 5.00, Category: 'AV' },
        ];
        app.state.tariffs = demoData;
        localStorage.setItem('pe_tariffs', JSON.stringify(demoData));
        app.renderTariffs();
    },

    // Task Logic - Comprehensive Production & QC Protocols
    generateTasks: (setupDateStr) => {
        const setupDate = new Date(setupDateStr);
        if (isNaN(setupDate)) return [];

        const addDays = (date, days) => {
            const res = new Date(date);
            res.setDate(res.getDate() + days);
            return res;
        };

        const tasks = [
            // PHASE 1: ENGINEERING & ADMIN (T-12 to T-8)
            { category: 'Engineering', name: "Detailed Technical Drawings (CAD)", weeksOut: 10 },
            { category: 'Validation', name: "Organizer Plan Submission (Deadlines)", weeksOut: 8 },
            { category: 'Engineering', name: "Static Calculation / Structural Cert", weeksOut: 8 },
            { category: 'Admin', name: "Risk Assessment (RAMS) Draft", weeksOut: 7 },
            { category: 'Admin', name: "Order Services (Electricity/Water/Rigging)", weeksOut: 6 },

            // PHASE 2: PRODUCTION (T-6 to T-4)
            { category: 'Production', name: "Carpentry: CNC Cutting", weeksOut: 6 },
            { category: 'Production', name: "Metalwork & Locksmith Orders", weeksOut: 6 },
            { category: 'Production', name: "Paint / Laminate Application", weeksOut: 5 },
            { category: 'Production', name: "Flooring Selection & Prep", weeksOut: 4 },
            { category: 'Purchasing', name: "Furniture & AV Booking", weeksOut: 4 },

            // PHASE 3: GRAPHICS & QC (T-3)
            { category: 'Graphics', name: "Receive Final Print Files", weeksOut: 4 },
            { category: 'QC', name: "Graphics Quality Check (Res/Color)", weeksOut: 3 },
            { category: 'QC', name: "Warehouse Pre-Assembly (Trial)", weeksOut: 2 },
            { category: 'QC', name: "Electrical System Test", weeksOut: 2 },
            { category: 'QC', name: "Finishing Quality Audit (Paint/Edges)", weeksOut: 2 },

            // PHASE 4: LOGISTICS (T-1)
            { category: 'Logistics', name: "Packing List Creation", weeksOut: 1.5 },
            { category: 'Logistics', name: "Truck Loading & Dispatch", weeksOut: 1 },
            { category: 'Logistics', name: "Unloading Slot Confirmation", weeksOut: 1 },

            // PHASE 5: ON-SITE
            { category: 'On-Site', name: "Marking Out the floor", weeksOut: 0.5 },
            { category: 'On-Site', name: "Structure Assembly", weeksOut: 0.4 },
            { category: 'On-Site', name: "Client Handover", weeksOut: 0 }
        ];

        return tasks.map(task => {
            const deadline = addDays(setupDate, -(task.weeksOut * 7));
            return {
                ...task,
                deadline: deadline.toISOString().split('T')[0],
                done: false
            };
        }).sort((a, b) => a.deadline.localeCompare(b.deadline));
    },

    deleteTaskById: (projectId, taskName) => {
        const project = app.state.projects.find(p => p.id == projectId);
        if (project && project.tasks) {
            project.tasks = project.tasks.filter(t => t.name !== taskName);
            app.saveProjects();
            app.renderDashboard();
        }
    },

    removeTask: (projectId, taskIndex) => {
        const project = app.state.projects.find(p => p.id === projectId);
        if (project && project.tasks) {
            project.tasks.splice(taskIndex, 1);
            app.saveProjects();
            app.renderProjects();
        }
    },

    editTask: (projectId, taskIndex) => {
        const project = app.state.projects.find(p => p.id === projectId);
        if (project && project.tasks) {
            const task = project.tasks[taskIndex];
            const newName = prompt("Edit Task Description:", task.name);
            const newDate = prompt("Edit Deadline (YYYY-MM-DD):", task.deadline);
            if (newName) task.name = newName;
            if (newDate) task.deadline = newDate;

            project.tasks.sort((a, b) => a.deadline.localeCompare(b.deadline));
            app.saveProjects();
            app.renderProjects();
        }
    },

    renderProjectPlan: (projectId) => {
        const project = app.state.projects.find(p => p.id === projectId);
        if (!project) return;

        const content = document.getElementById('content-area');

        // Gantt Chart Logic (Native HTML/CSS)
        const tasks = project.tasks || [];
        const startDate = new Date(Math.min(...tasks.map(t => new Date(t.deadline))));
        const endDate = new Date(project.setupDate);
        const totalDays = Math.max(1, (endDate - startDate) / (1000 * 60 * 60 * 24)) + 14;

        content.innerHTML = `
            <div class="card">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                    <div>
                        <h2>Project Plan: ${project.client} @ ${project.event}</h2>
                        <span style="color:var(--text-secondary)">Setup Start: ${app.formatDate(project.setupDate)}</span>
                    </div>
                    <button class="btn btn-outline" onclick="app.renderProjects()">Back to list</button>
                </div>

                <div style="overflow-x:auto; background:var(--bg-dark); border-radius:12px; padding:20px; border:1px solid var(--glass-border);">
                    <div style="min-width:800px; position:relative;">
                        <!-- Timeline Headers -->
                        <div style="display:flex; border-bottom:1px solid var(--glass-border); padding-bottom:8px; margin-bottom:16px;">
                            <div style="width:250px; font-weight:bold; color:var(--text-secondary)">Task Description</div>
                            <div style="flex:1; display:flex; font-size:0.7rem; color:var(--text-secondary); border-left:1px solid var(--glass-border);">
                                ${Array.from({ length: Math.ceil(totalDays / 7) }).map((_, i) => `
                                    <div style="flex:1; text-align:center; border-right:1px solid rgba(255,255,255,0.05);">Week -${Math.ceil((totalDays / 7)) - i}</div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Gantt Rows -->
                        <div style="display:grid; gap:4px;">
                            ${tasks.map((t, idx) => {
            const taskDate = new Date(t.deadline);
            const offset = (taskDate - startDate) / (1000 * 60 * 60 * 24);
            const percent = (offset / totalDays) * 100;

            return `
                                    <div style="display:flex; align-items:center; height:32px;">
                                        <div style="width:250px; font-size:0.85rem; padding-right:10px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${t.name}">${t.name}</div>
                                        <div style="flex:1; position:relative; background:rgba(255,255,255,0.02); height:100%; border-left:1px solid var(--glass-border);">
                                            <div style="position:absolute; left:${percent}%; top:8px; width:12px; height:12px; background:var(--accent); border-radius:50%; cursor:move; box-shadow:0 0 8px var(--accent);" 
                                                 title="Deadline: ${t.deadline}"></div>
                                            <div style="position:absolute; left:0; top:15px; width:${percent}%; height:2px; background:var(--accent); opacity:0.2;"></div>
                                        </div>
                                    </div>
                                `;
        }).join('')}
                        </div>
                    </div>
                </div>
                
                <p style="margin-top:20px; font-size:0.8rem; color:var(--text-secondary); font-style:italic;">
                    * The Gantt chart starts 12 weeks before based on ProExpo protocols. Deadlines are visualized as critical milestones.
                </p>
            </div>
        `;
        lucide.createIcons();
    },

    toggleTask: (projectId, taskIndex) => {
        const project = app.state.projects.find(p => p.id === projectId);
        if (project && project.tasks) {
            project.tasks[taskIndex].done = !project.tasks[taskIndex].done;
            app.saveProjects();
            app.renderProjects();
        }
    },

    // --- PROJECT MANAGEMENT ---

    renderProjects: () => {
        const content = document.getElementById('content-area');

        // Auto-update project status based on event start date
        const today = new Date().toISOString().split('T')[0];
        let statusUpdated = false;

        app.state.projects.forEach(p => {
            // Skip if already finished
            if (p.status === 'Finished') return;

            // Find the event in showDatabase to get the start date
            const evtName = p.event.replace(new RegExp(`^${p.client}\\\\s*@\\\\s*`, 'i'), '').trim();
            const showData = app.state.showDatabase.find(s => s.name.toLowerCase().includes(evtName.toLowerCase()));

            // If we found the show and its start date has passed, mark as Finished
            if (showData && showData.start && showData.start < today) {
                p.status = 'Finished';
                statusUpdated = true;
            }
        });

        // Save if any status was updated
        if (statusUpdated) {
            app.saveProjects();
        }

        // State for filters (use global state or temporary defaults if strict mode)
        const filterClient = app.state.filterClient || '';
        const filterEvent = app.state.filterEvent || '';
        // Default PM filter to current user's name (Manuel Moreno)
        const filterPM = app.state.filterPM !== undefined ? app.state.filterPM : app.state.user.name;
        const filterMonth = app.state.filterMonth || '';
        const viewMode = app.state.projectViewMode || 'cards'; // 'cards' or 'list'

        // 1. Calculate Filter Options
        const allClients = [...new Set(app.state.projects.map(p => p.client))].sort();
        const allEvents = [...new Set(app.state.projects.map(p => p.event.replace(new RegExp(`^${p.client}\\s*@\\s*`, 'i'), '').trim()))].sort();
        const allPMs = [...new Set(app.state.projects.map(p => p.pm))].sort();

        // 2. Filter Projects
        let filteredProjects = app.state.projects.filter(p => {
            const evtName = p.event.replace(new RegExp(`^${p.client}\\s*@\\s*`, 'i'), '').trim();
            const matchesClient = filterClient === '' || p.client === filterClient;
            const matchesEvent = filterEvent === '' || evtName === filterEvent;
            // PM filter: support 'Unassigned' option
            const matchesPM = filterPM === '' ||
                (filterPM === 'Unassigned' && (!p.pm || p.pm === '')) ||
                p.pm === filterPM;
            // Month filter: extract month from setupDate (format: YYYY-MM-DD)
            const matchesMonth = filterMonth === '' || (p.setupDate && p.setupDate.split('-')[1] === filterMonth);
            return matchesClient && matchesEvent && matchesPM && matchesMonth;
        });

        // 3. Sort Projects
        const sortField = app.state.projectSortField || 'setupDate';
        const sortDir = app.state.projectSortDir || 'asc';

        filteredProjects.sort((a, b) => {
            let valA = a[sortField];
            let valB = b[sortField];

            // Normalize
            if (sortField === 'event') {
                valA = a.event.replace(new RegExp(`^${a.client}\\s*@\\s*`, 'i'), '').trim();
                valB = b.event.replace(new RegExp(`^${b.client}\\s*@\\s*`, 'i'), '').trim();
            }
            if (typeof valA === 'string') valA = valA.toLowerCase();
            if (typeof valB === 'string') valB = valB.toLowerCase();

            if (valA < valB) return sortDir === 'asc' ? -1 : 1;
            if (valA > valB) return sortDir === 'asc' ? 1 : -1;
            return 0;
        });

        // 3. Render Filters Bar
        const filtersHtml = `
            <div style="background:var(--bg-dark); padding:16px; border-radius:12px; margin-bottom:24px; border:1px solid var(--glass-border); display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
                <div style="display:flex; align-items:center; gap:8px;">
                     <i data-lucide="filter" style="width:16px; color:var(--text-secondary)"></i>
                     <span style="font-weight:bold; font-size:0.9rem;">Filters:</span>
                </div>
                
                <select onchange="app.setProjectFilter('filterClient', this.value)" style="padding:8px; border-radius:8px; background:rgba(255,255,255,0.05); color:white; border:1px solid var(--glass-border); outline:none;">
                    <option value="">All Clients</option>
                    ${allClients.map(c => `<option value="${c}" ${filterClient === c ? 'selected' : ''}>${c}</option>`).join('')}
                </select>

                <select onchange="app.setProjectFilter('filterEvent', this.value)" style="padding:8px; border-radius:8px; background:rgba(255,255,255,0.05); color:white; border:1px solid var(--glass-border); outline:none;">
                    <option value="">All Events</option>
                    ${allEvents.map(e => `<option value="${e}" ${filterEvent === e ? 'selected' : ''}>${e}</option>`).join('')}
                </select>

                <select onchange="app.setProjectFilter('filterMonth', this.value)" style="padding:8px; border-radius:8px; background:rgba(255,255,255,0.05); color:white; border:1px solid var(--glass-border); outline:none;">
                    <option value="">All Months</option>
                    <option value="01" ${filterMonth === '01' ? 'selected' : ''}>January</option>
                    <option value="02" ${filterMonth === '02' ? 'selected' : ''}>February</option>
                    <option value="03" ${filterMonth === '03' ? 'selected' : ''}>March</option>
                    <option value="04" ${filterMonth === '04' ? 'selected' : ''}>April</option>
                    <option value="05" ${filterMonth === '05' ? 'selected' : ''}>May</option>
                    <option value="06" ${filterMonth === '06' ? 'selected' : ''}>June</option>
                    <option value="07" ${filterMonth === '07' ? 'selected' : ''}>July</option>
                    <option value="08" ${filterMonth === '08' ? 'selected' : ''}>August</option>
                    <option value="09" ${filterMonth === '09' ? 'selected' : ''}>September</option>
                    <option value="10" ${filterMonth === '10' ? 'selected' : ''}>October</option>
                    <option value="11" ${filterMonth === '11' ? 'selected' : ''}>November</option>
                    <option value="12" ${filterMonth === '12' ? 'selected' : ''}>December</option>
                </select>

                <select onchange="app.setProjectFilter('filterPM', this.value)" style="padding:8px; border-radius:8px; background:rgba(255,255,255,0.05); color:white; border:1px solid var(--glass-border); outline:none;">
                    <option value="">All PMs</option>
                    <option value="Unassigned" ${filterPM === 'Unassigned' ? 'selected' : ''}>⚠️ Unassigned</option>
                    ${allPMs.map(pm => `<option value="${pm}" ${filterPM === pm ? 'selected' : ''}>${pm}</option>`).join('')}
                </select>

                <button class="btn btn-outline btn-sm" onclick="app.clearProjectFilters()" style="margin-left:auto;">Clear</button>
            </div>
        `;

        // 4. Render Gantt / Timeline ("Wow" Feature) - Filter out Finished
        const timelineProjects = filteredProjects.filter(p => p.status !== 'Finished');
        const timelineHtml = app.renderGlobalTimeline(timelineProjects);

        // 5. Render List / Cards
        let listHtml = '';
        if (viewMode === 'list') {
            // Get current sort state
            const sortField = app.state.projectSortField || 'setupDate';
            const sortDirection = app.state.projectSortDirection || 'asc';

            // Sort filtered projects
            filteredProjects.sort((a, b) => {
                let aVal, bVal;

                switch (sortField) {
                    case 'client':
                        aVal = (a.client || '').toLowerCase();
                        bVal = (b.client || '').toLowerCase();
                        break;
                    case 'event':
                        aVal = (a.event || '').toLowerCase();
                        bVal = (b.event || '').toLowerCase();
                        break;
                    case 'showStart':
                        const aEvt = a.event.replace(new RegExp(`^${a.client}\\\\s*@\\\\s*`, 'i'), '').trim();
                        const bEvt = b.event.replace(new RegExp(`^${b.client}\\\\s*@\\\\s*`, 'i'), '').trim();
                        const aShow = app.state.showDatabase.find(s => s.name.toLowerCase().includes(aEvt.toLowerCase()));
                        const bShow = app.state.showDatabase.find(s => s.name.toLowerCase().includes(bEvt.toLowerCase()));
                        aVal = aShow?.start || '';
                        bVal = bShow?.start || '';
                        break;
                    case 'setupDate':
                        aVal = a.setupDate || '';
                        bVal = b.setupDate || '';
                        break;
                    case 'pm':
                        aVal = (a.pm || '').toLowerCase();
                        bVal = (b.pm || '').toLowerCase();
                        break;
                    case 'status':
                        aVal = (a.status || '').toLowerCase();
                        bVal = (b.status || '').toLowerCase();
                        break;
                    default:
                        aVal = a[sortField] || '';
                        bVal = b[sortField] || '';
                }

                if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
                if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
                return 0;
            });

            // Helper function to render sort indicator
            const sortIcon = (field) => {
                if (sortField !== field) return '<i data-lucide="chevrons-up-down" style="width:14px; opacity:0.3; vertical-align:middle;"></i>';
                return sortDirection === 'asc'
                    ? '<i data-lucide="chevron-up" style="width:14px; color:var(--accent); vertical-align:middle;"></i>'
                    : '<i data-lucide="chevron-down" style="width:14px; color:var(--accent); vertical-align:middle;"></i>';
            };

            listHtml = `
                <div class="card" style="padding:0; overflow:hidden;">
                    <table style="width:100%; border-collapse:collapse;">
                        <thead>
                            <tr style="background:rgba(255,255,255,0.05); text-align:left;">
                                <th onclick="app.sortProjects('client')" style="padding:16px; cursor:pointer; user-select:none; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">
                                    Client ${sortIcon('client')}
                                </th>
                                <th onclick="app.sortProjects('event')" style="padding:16px; cursor:pointer; user-select:none; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">
                                    Event ${sortIcon('event')}
                                </th>
                                <th onclick="app.sortProjects('showStart')" style="padding:16px; cursor:pointer; user-select:none; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">
                                    Show Start ${sortIcon('showStart')}
                                </th>
                                <th onclick="app.sortProjects('setupDate')" style="padding:16px; cursor:pointer; user-select:none; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">
                                    Setup Date ${sortIcon('setupDate')}
                                </th>
                                <th onclick="app.sortProjects('pm')" style="padding:16px; cursor:pointer; user-select:none; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">
                                    PM ${sortIcon('pm')}
                                </th>
                                <th onclick="app.sortProjects('status')" style="padding:16px; cursor:pointer; user-select:none; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">
                                    Status ${sortIcon('status')}
                                </th>
                                <th style="padding:16px; text-align:right;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${filteredProjects.map(p => {
                // Try to find show start date from DB
                const evtName = p.event.replace(new RegExp(`^${p.client}\\s*@\\s*`, 'i'), '').trim();
                const showData = app.state.showDatabase.find(s => s.name.includes(evtName));
                const showStart = showData ? showData.start : p.setupDate; // Fallback

                return `
                                <tr style="border-bottom:1px solid var(--glass-border); hover:background:rgba(255,255,255,0.02);">
                                    <td style="padding:16px; font-weight:bold;">${p.client}</td>
                                    <td style="padding:16px;">${evtName}</td>
                                    <td style="padding:16px; color:var(--text-secondary);">${app.formatDate(showStart)}</td>
                                    <td style="padding:16px;">${app.formatDate(p.setupDate)}</td>
                                    <td style="padding:16px;">
                                        <div style="display:flex; align-items:center; gap:6px;">
                                            ${p.pm ? `
                                                <div style="width:24px; height:24px; background:var(--accent); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.7rem; color:black;">${p.pm.charAt(0)}</div>
                                                ${p.pm}
                                            ` : `
                                                <select onchange="app.quickAssignPM(${p.id}, this.value)" style="padding:4px 8px; background:var(--bg-dark); border:1px solid var(--warning); border-radius:6px; color:var(--warning); font-size:0.8rem;">
                                                    <option value="">⚠️ Assign PM...</option>
                                                    ${allPMs.map(pm => `<option value="${pm}">${pm}</option>`).join('')}
                                                </select>
                                            `}
                                        </div>
                                    </td>
                                    <td style="padding:16px;">
                                        <span style="font-size:0.75rem; padding:4px 10px; background:${app.getStatusColor(p.status)}; border-radius:12px; color:white;">${p.status}</span>
                                    </td>
                                    <td style="padding:16px; text-align:right;">
                                        <button class="btn btn-outline btn-sm" onclick="app.editProject(${p.id})"><i data-lucide="edit-3" style="width:14px;"></i></button>
                                        <button class="btn btn-outline btn-sm" onclick="app.renderProjectExecutionPlan(${p.id})"><i data-lucide="trello" style="width:14px;"></i></button>
                                    </td>
                                </tr>
                            `}).join('')}
                        </tbody>
                    </table>
                </div>
             `;
        } else {
            // Cards View (Original but optimized)
            listHtml = `
                <div style="display:grid; grid-template-columns: 1fr; gap:16px;">
                    ${filteredProjects.map(p => app.renderProjectCard(p)).join('')}
                </div>
             `;
        }

        content.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 24px;">
                <div>
                    <h2>Project Portfolio</h2>
                    <div style="display:flex; gap:12px; margin-top:8px;">
                         <button class="btn btn-sm ${viewMode === 'cards' ? 'btn-primary' : 'btn-outline'}" onclick="app.setProjectViewMode('cards')"><i data-lucide="layout-grid" style="width:14px;"></i> Cards</button>
                         <button class="btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-outline'}" onclick="app.setProjectViewMode('list')"><i data-lucide="list" style="width:14px;"></i> List</button>
                    </div>
                </div>
                <div style="display:flex; gap:12px;">
                    <button class="btn btn-outline" onclick="app.renderProjectExecutionPlan()">
                        <i data-lucide="trello"></i> Execution Plans
                    </button>
                    <button class="btn btn-primary" onclick="app.openProjectModal()">
                        <i data-lucide="plus"></i> New Project
                    </button>
                </div>
            </div>

            <!-- Filters -->
            ${filtersHtml}

            <!-- Global Timeline ("Wow" Feature) -->
            ${timelineHtml}

            <!-- List of Projects -->
            ${filteredProjects.length > 0 ? listHtml : '<div style="text-align:center; padding:100px; opacity:0.3;">No projects match your filters.</div>'}
        `;
        lucide.createIcons();
    },

    setProjectFilter: (key, val) => {
        app.state[key] = val;
        app.renderProjects();
    },

    clearProjectFilters: () => {
        app.state.filterClient = '';
        app.state.filterEvent = '';
        app.state.filterPM = '';
        app.state.filterMonth = '';
        app.renderProjects();
    },

    setProjectViewMode: (mode) => {
        app.state.projectViewMode = mode;
        app.renderProjects();
    },

    sortProjects: (field) => {
        if (app.state.projectSortField === field) {
            // Toggle
            app.state.projectSortDirection = app.state.projectSortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            app.state.projectSortField = field;
            app.state.projectSortDirection = 'asc';
        }
        app.renderProjects();
    },

    quickAssignPM: (projectId, pmName) => {
        const project = app.state.projects.find(p => p.id === projectId);
        if (project && pmName) {
            project.pm = pmName;
            app.saveProjects();
            app.renderProjects();
        }
    },

    getPMColor: (name) => {
        const colors = {
            'Amir': '#F59E0B',    // Amber
            'Ana': '#EC4899',     // Pink
            'Elena': '#8B5CF6',   // Purple
            'Gema': '#10B981',    // Emerald
            'Manu': '#3B82F6',    // Blue
            'Miguel': '#EF4444',  // Red
            'Marina': '#06B6D4',  // Cyan
            'Wiktoria': '#F97316',// Orange
            'Estefi': '#6366F1',  // Indigo
            'Irazu': '#14B8A6'    // Teal
        };
        if (colors[name]) return colors[name];

        // Hash fallback
        let hash = 0;
        for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
        const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
        return '#' + '00000'.substring(0, 6 - c.length) + c;
    },

    // Extracted Card Render for cleaner code
    renderProjectCard: (p) => {
        // Auto folding logic remains, can be simplified for this view
        const total = p.tasks ? p.tasks.length : 0;
        const done = p.tasks ? p.tasks.filter(t => t.done).length : 0;
        // Find quote logic
        const relatedQuotes = app.state.quotes.filter(q => q.projectId == p.id);
        let quoteValueDisplay = '';
        if (relatedQuotes.length > 0) {
            const latestQuote = relatedQuotes.sort((a, b) => (b.date || '').localeCompare(a.date || ''))[0];
            const subtotal = latestQuote.items.reduce((s, i) => s + (i.price * i.qty), 0);
            const totalVal = subtotal * (1 + (latestQuote.vat || 0.21));
            quoteValueDisplay = app.formatCurrency(totalVal);
        }

        return `
            <div class="card" style="margin-bottom:0; border-left: 4px solid var(--accent); padding: 16px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; gap:16px; align-items:center;">
                        <div style="width:50px; height:50px; background:rgba(255,255,255,0.05); border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.2rem; color:var(--accent);">
                            ${p.client.charAt(0)}
                        </div>
                        <div>
                             <h3 style="margin:0; font-size:1.1rem; cursor:pointer;" onclick="app.toggleProjectFold(${p.id})">${p.client} <span style="font-weight:400; color:var(--text-secondary);">@ ${p.event.replace(new RegExp(`^${p.client}\\s*@\\s*`, 'i'), '')}</span></h3>
                             <div style="margin-top:6px; display:flex; gap:16px; font-size:0.85rem; color:var(--text-secondary);">
                                <span><i data-lucide="user" style="width:12px; vertical-align:middle;"></i> ${p.pm}</span>
                                <span><i data-lucide="calendar" style="width:12px; vertical-align:middle;"></i> Setup: ${app.formatDate(p.setupDate)}</span>
                                <span style="padding:2px 8px; background:${app.getStatusColor(p.status)}; border-radius:12px; color:white; font-size:0.7rem;">${p.status}</span>
                                ${quoteValueDisplay ? `<span style="color:var(--success); font-weight:bold;">${quoteValueDisplay}</span>` : ''}
                             </div>
                        </div>
                    </div>
                    <div style="display:flex; gap:8px;">
                        <button class="btn btn-outline btn-sm" onclick="app.editProject(${p.id})">Edit</button>
                        <button class="btn btn-outline btn-sm" onclick="app.renderProjectExecutionPlan(${p.id})">Plan</button>
                         <button class="btn btn-outline btn-sm" onclick="app.toggleProjectFold(${p.id})"><i data-lucide="${p.folded ? 'chevron-down' : 'chevron-up'}"></i></button>
                    </div>
                </div>
                
                <!-- Folded Content (Tasks) -->
                ${!p.folded ? `
                    <div style="margin-top:20px; padding-top:20px; border-top:1px solid var(--glass-border); animation:fadeIn 0.3s ease;">
                         <h4 style="margin:0 0 12px 0; font-size:0.9rem; color:var(--text-secondary);">Tasks (${done}/${total})</h4>
                         <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                            ${p.tasks && p.tasks.slice(0, 6).map(t => `
                                <div style="display:flex; align-items:center; gap:8px; font-size:0.85rem; color:${t.done ? 'var(--text-secondary)' : 'white'};">
                                    <i data-lucide="${t.done ? 'check-circle' : 'circle'}" style="width:14px; color:${t.done ? 'var(--success)' : 'var(--text-secondary)'}"></i>
                                    <span style="text-decoration:${t.done ? 'line-through' : 'none'}">${t.name}</span>
                                </div>
                            `).join('')}
                            ${(p.tasks && p.tasks.length > 6) ? `<div style="font-size:0.8rem; color:var(--text-secondary);">+ ${p.tasks.length - 6} more tasks...</div>` : ''}
                         </div>
                    </div>
                ` : ''}
            </div>
         `;
    },

    renderGlobalTimeline: (projects) => {
        // Only show up to 10 projects to keep it clean
        const displayProjects = projects.slice(0, 10);
        if (displayProjects.length === 0) return '';

        // Calculate Range
        const dates = displayProjects.map(p => new Date(p.setupDate));
        const minDate = new Date(Math.min(...dates));
        const maxDate = new Date(Math.max(...dates));

        // Add buffer
        minDate.setDate(minDate.getDate() - 7);
        maxDate.setDate(maxDate.getDate() + 14);

        const totalDays = (maxDate - minDate) / (1000 * 60 * 60 * 24);

        return `
            <div class="card" style="margin-bottom:24px; background:linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1)); border:1px solid var(--accent);">
                <h3 style="margin-bottom:16px; display:flex; align-items:center; gap:8px; color:var(--accent);">
                    <i data-lucide="activity"></i> Production Timeline (Live)
                </h3>
                <div style="overflow-x:auto;">
                    <div style="min-width: 800px; position:relative; height:${displayProjects.length * 40 + 30}px;">
                        
                        <!-- Timeline Header (Months) -->
                        <div style="display:flex; position:absolute; top:0; left:200px; right:0; height:24px; border-bottom:1px solid var(--glass-border);">
                            <div style="flex:1; text-align:left; font-size:0.75rem; color:var(--text-secondary); padding-left:4px;">Timeline Scope (${app.formatDate(minDate)} - ${app.formatDate(maxDate)})</div>
                        </div>

                        <!-- Projects -->
                        ${displayProjects.map((p, i) => {
            const start = new Date(p.setupDate);
            // Assume Show Start is +2 days after setup if unknown
            const end = new Date(start);
            end.setDate(end.getDate() + 4); // 4 day event duration approx

            const startPercent = ((start - minDate) / (totalDays * 1000 * 60 * 60 * 24)) * 100;
            const durationPercent = ((end - start) / (totalDays * 1000 * 60 * 60 * 24)) * 100;

            return `
                                <div style="position:absolute; top:${30 + (i * 40)}px; left:0; right:0; height:32px; display:flex; align-items:center;">
                                    <div style="width:200px; font-size:0.85rem; font-weight:bold; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; padding-right:10px;">
                                        ${p.client}
                                    </div>
                                    <div style="flex:1; position:relative; background:rgba(255,255,255,0.02); height:100%; border-left:1px solid var(--glass-border);">
                                        <div style="position:absolute; left:${Math.max(0, startPercent)}%; width:${Math.max(1, durationPercent)}%; top:6px; height:20px; background:var(--accent); border-radius:4px; box-shadow:0 0 10px rgba(59,130,246,0.3); display:flex; align-items:center; padding-left:8px; color:black; font-size:0.7rem; font-weight:bold; white-space:nowrap; overflow:hidden;">
                                            ${p.event.replace(new RegExp(`^${p.client}\\s*@\\s*`, 'i'), '')}
                                        </div>
                                    </div>
                                </div>
                            `;
        }).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    renderProjectExecutionPlan: (projectId = '') => {
        // Handle Project Selection State
        if (projectId) {
            app.state.planningProjectId = projectId;
        }

        const currentId = app.state.planningProjectId;
        // Use non-strict equality to match string IDs from HTML with numeric/string IDs in state
        const project = app.state.projects.find(p => p.id == currentId);

        console.log('Rendering Execution Plan. ID:', currentId, 'Project found:', !!project);

        const content = document.getElementById('content-area');

        // Project Selector HTML
        const projectSelect = `
            <select onchange="app.renderProjectExecutionPlan(this.value)" style="padding:10px; background:var(--bg-dark); border:1px solid var(--accent); border-radius:8px; color:white; font-size:1rem; outline:none; min-width:300px;">
                <option value="">-- Select Project to Plan --</option>
                ${app.state.projects.map(p => `<option value="${p.id}" ${p.id == currentId ? 'selected' : ''}>${p.client} @ ${p.event}</option>`).join('')}
            </select>
        `;

        // If no project selected, show empty state
        if (!project) {
            content.innerHTML = `
                <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center;">
                    <h2>Project Execution Plan</h2>
                    <button class="btn btn-outline" onclick="app.renderProjects()">Back to Portfolio</button>
                </div>
                <div class="card" style="text-align:center; padding:60px; min-height:400px; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                    <i data-lucide="trello" style="width:64px; height:64px; color:var(--text-secondary); margin-bottom:20px;"></i>
                    <h3 style="margin-bottom:16px;">Select a Project to Begin Planning</h3>
                    <div style="color:var(--text-secondary); margin-bottom:24px;">Choose an active project to view milestones, comprehensive checklists, and setup schedules.</div>
                    ${projectSelect}
                </div>
            `;
            lucide.createIcons();
            return;
        }

        // Initialize Data if missing
        if (!project.milestones) {
            project.milestones = [
                { name: 'Debrief Call', date: '', done: false },
                { name: 'Deadlines Communicated', date: '', done: false },
                { name: 'Final Design Sent', date: '', done: false },
                { name: 'Feedback Received', date: '', done: false },
                { name: 'Final Approval (Organizers)', date: '', done: false },
                { name: 'Contract Signed', date: '', done: false },
                { name: 'Invoiced 70%', date: '', done: false }
            ];
        }

        if (!project.setupSchedule) {
            // Seed with simple MWC-style default if empty
            const start = new Date(project.setupDate);
            const fmt = (d) => d.toISOString().split('T')[0];
            project.setupSchedule = [
                { date: fmt(start), time: '08:00 - 12:00', activity: 'Truck arrival and unloading' },
                { date: fmt(start), time: '14:00 - 18:00', activity: 'Floor marking and basic structure' }
            ];
        }

        // Sort Schedule
        project.setupSchedule.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

        content.innerHTML = `
            <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:16px;">
                    <h2>Execution Plan</h2>
                    ${projectSelect}
                </div>
                <button class="btn btn-outline" onclick="app.renderProjects()">Back to Portfolio</button>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1.2fr; gap:32px;">
                
                <!-- MILESTONES -->
                <div class="card">
                    <h3 style="color:var(--accent); margin-bottom:20px; display:flex; align-items:center; gap:10px;">
                        <i data-lucide="flag"></i> Key Milestones
                    </h3>
                    <div style="display:grid; gap:12px;">
                        ${project.milestones.map((m, idx) => `
                            <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">
                                <div style="display:flex; align-items:center; gap:12px; flex:1;">
                                    <input type="checkbox" ${m.done ? 'checked' : ''} onchange="app.toggleMilestone(${currentId}, ${idx})" 
                                        style="width:16px; height:16px; accent-color:var(--success); cursor:pointer;">
                                    <div>
                                        <div style="font-weight:600; font-size:0.9rem; text-decoration:${m.done ? 'line-through' : 'none'}; opacity:${m.done ? 0.5 : 1}">${m.name}</div>
                                        <input type="date" value="${m.date}" onchange="app.updateMilestoneDate(${currentId}, ${idx}, this.value)" 
                                            style="background:transparent; border:none; color:var(--text-secondary); font-size:0.8rem; font-family:inherit;">
                                    </div>
                                </div>
                                <button class="btn btn-outline btn-sm" onclick="alert('Triggered Reminder for: ${m.name}')" title="Send Client Reminder">
                                    <i data-lucide="bell" style="width:14px;"></i> Remind
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- SETUP FLOW (Time & Line) -->
                <div class="card">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                        <h3 style="color:var(--accent); display:flex; align-items:center; gap:10px;">
                            <i data-lucide="hard-hat"></i> On-Site Setup Flow
                        </h3>
                        <button class="btn btn-outline btn-sm" onclick="app.addSetupLine(${currentId})"><i data-lucide="plus"></i> Add Line</button>
                    </div>

                    <div style="display:grid; gap:15px; border-left:2px solid var(--glass-border); padding-left:20px; position:relative;">
                         ${project.setupSchedule.map((s, idx) => `
                            <div style="position:relative; background:rgba(255,255,255,0.03); padding:10px; border-radius:8px;">
                                <div style="position:absolute; left:-27px; top:15px; width:12px; height:12px; background:var(--accent); border-radius:50%; border:3px solid var(--bg-dark);"></div>
                                <div style="display:flex; gap:8px; margin-bottom:4px;">
                                    <input type="date" value="${s.date}" onchange="app.updateSetupItem(${currentId}, ${idx}, 'date', this.value)"
                                        style="background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:4px; font-size:0.8rem; padding:4px;">
                                    <input type="text" value="${s.time || ''}" placeholder="00:00" onchange="app.updateSetupItem(${currentId}, ${idx}, 'time', this.value)"
                                        style="background:var(--bg-dark); border:1px solid var(--glass-border); color:var(--accent); border-radius:4px; font-size:0.8rem; padding:4px; width:80px; font-weight:bold;">
                                    <button onclick="app.removeSetupLine(${currentId}, ${idx})" style="margin-left:auto; background:none; border:none; color:var(--danger); cursor:pointer;"><i data-lucide="x" style="width:14px;"></i></button>
                                </div>
                                <textarea rows="2" onchange="app.updateSetupItem(${currentId}, ${idx}, 'activity', this.value)"
                                    style="width:100%; background:transparent; border:none; color:white; font-size:0.9rem; resize:vertical; font-family:inherit;"
                                    placeholder="Describe activity...">${s.activity}</textarea>
                            </div>
                        `).join('')}
                    </div>
                </div>
                    </div>
                </div>

                <!-- DETAILED PRODUCTION CHECKLIST -->
                <div class="card" style="grid-column: 1 / -1;">
                    <h3 style="color:var(--accent); margin-bottom:20px; display:flex; align-items:center; gap:10px;">
                        <i data-lucide="clipboard-check"></i> Comprehensive Production & QC Checklist
                    </h3>
                    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:16px;">
                        ${project.tasks ? project.tasks.map((t, i) => `
                            <div style="background:rgba(255,255,255,0.03); padding:12px; border-radius:8px; border-left:3px solid ${t.category === 'QC' ? 'var(--warning)' : 'var(--glass-border)'}; display:flex; align-items:center; gap:12px;">
                                <input type="checkbox" ${t.done ? 'checked' : ''} onchange="app.toggleTask(${currentId}, ${i})" style="width:18px; height:18px; accent-color:var(--accent); cursor:pointer;">
                                <div style="flex:1;">
                                    <div style="font-size:0.9rem; font-weight:500; text-decoration:${t.done ? 'line-through' : 'none'}; color:${t.done ? 'var(--text-secondary)' : 'white'}">${t.name}</div>
                                    <div style="font-size:0.75rem; color:var(--text-secondary); display:flex; justify-content:space-between; margin-top:4px;">
                                        <span>${t.category}</span>
                                        <span style="${t.deadline < new Date().toISOString().split('T')[0] && !t.done ? 'color:var(--danger)' : ''}">${app.formatDate(t.deadline)}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('') : '<div style="padding:20px; text-align:center; color:var(--text-secondary);">No production tasks yet. Go to Portfolio to generate them.</div>'}
                    </div>
                </div>
            </div>

            <!-- GANTT VISUALIZATION -->
            <div class="card" style="margin-top:32px;">
                <h3 style="color:var(--accent); margin-bottom:20px; display:flex; align-items:center; gap:10px;">
                    <i data-lucide="calendar-days"></i> Production Calendar (Visualization)
                </h3>
                ${app.renderSimplifiedGantt(project)}
            </div>
        `;
        lucide.createIcons();
    },

    // --- EXECUTION PLAN HELPERS ---

    toggleMilestone: (pid, idx) => {
        const p = app.state.projects.find(x => x.id == pid);
        if (p && p.milestones[idx]) {
            p.milestones[idx].done = !p.milestones[idx].done;
            app.saveProjects();
            app.renderProjectExecutionPlan(pid);
        }
    },

    updateMilestoneDate: (pid, idx, val) => {
        const p = app.state.projects.find(x => x.id == pid);
        if (p && p.milestones[idx]) {
            p.milestones[idx].date = val;
            app.saveProjects();
        }
    },

    addSetupLine: (pid) => {
        const p = app.state.projects.find(x => x.id == pid);
        if (p) {
            const last = p.setupSchedule[p.setupSchedule.length - 1];
            p.setupSchedule.push({
                date: last ? last.date : p.setupDate,
                time: '09:00',
                activity: 'New activity step'
            });
            app.saveProjects();
            app.renderProjectExecutionPlan(pid);
        }
    },

    removeSetupLine: (pid, idx) => {
        const p = app.state.projects.find(x => x.id == pid);
        if (p) {
            p.setupSchedule.splice(idx, 1);
            app.saveProjects();
            app.renderProjectExecutionPlan(pid);
        }
    },

    updateSetupItem: (pid, idx, field, val) => {
        const p = app.state.projects.find(x => x.id == pid);
        if (p && p.setupSchedule[idx]) {
            p.setupSchedule[idx][field] = val;
            app.saveProjects();
        }
    },

    renderSimplifiedGantt: (project) => {
        // Collect all dates from milestones and setup
        const dates = [
            project.setupDate,
            project.dismantlingDate,
            ...(project.milestones || []).map(m => m.date).filter(d => d),
            ...(project.setupSchedule || []).map(s => s.date).filter(d => d)
        ].sort();

        if (dates.length < 2) return '<div style="padding:20px; text-align:center; color:var(--text-secondary)">Please add dates to milestones or setup schedule to generate Gantt.</div>';

        const start = new Date(dates[0]);
        // buffer start by 3 days
        start.setDate(start.getDate() - 3);

        const end = new Date(dates[dates.length - 1]);
        // buffer end by 3 days
        end.setDate(end.getDate() + 3);

        const totalTime = end - start;
        const totalDays = totalTime / (1000 * 60 * 60 * 24);

        const items = [
            ...(project.milestones || []).filter(m => m.date).map(m => ({ label: 'Milestone: ' + m.name, date: m.date, type: 'milestone' })),
            ...(project.setupSchedule || []).filter(s => s.date).map(s => ({ label: 'Setup: ' + s.activity.substring(0, 30) + '...', date: s.date, type: 'task' }))
        ];

        return `
            <div style="background:var(--bg-dark); padding:20px; border-radius:12px; border:1px solid var(--glass-border); overflow-x:auto;">
                <div style="min-width:800px; position:relative; height: ${items.length * 40 + 50}px;">
                    <!-- Time Axis -->
                    <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--glass-border); padding-bottom:8px; margin-bottom:12px; color:var(--text-secondary); font-size:0.75rem;">
                        <span>${app.formatDate(start.toISOString())}</span>
                        <span>${app.formatDate(end.toISOString())}</span>
                    </div>

                    <!-- Bars -->
                    ${items.map((item, i) => {
            const d = new Date(item.date);
            const left = ((d - start) / totalTime) * 100;
            const color = item.type === 'milestone' ? '#f59e0b' : '#3b82f6';
            return `
                            <div style="position:absolute; top:${40 + (i * 35)}px; left:${left}%; transform:translateX(-50%); white-space:nowrap; display:flex; flex-direction:column; align-items:center;">
                                <div style="width:12px; height:12px; background:${color}; border-radius:50%; margin-bottom:4px; box-shadow:0 0 5px ${color};"></div>
                                <span style="font-size:0.7rem; color:${color}; background:rgba(0,0,0,0.5); padding:2px 6px; border-radius:4px;">${item.label}</span>
                            </div>
                            <div style="position:absolute; top:${40 + (i * 35) + 5}px; left:0; width:${left}%; height:1px; background:rgba(255,255,255,0.05); z-index:-1;"></div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    },

    openProjectModal: () => {
        // Ensure the modal structure exists
        let modal = document.getElementById('project-modal');
        if (!modal) {
            modal = document.createElement('dialog');
            modal.id = 'project-modal';
            modal.className = 'glass';
            modal.style.cssText = 'margin:auto; border-radius:16px; border:1px solid var(--glass-border); padding:0; width:750px; max-width:95vw; background:var(--bg-dark); color:white;';
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <form onsubmit="app.handleProjectSubmit(event)" style="padding:32px;">
                <input type="hidden" id="p-id">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                    <h3 id="modal-title" style="margin:0;">Project Execution Info</h3>
                    <button type="button" onclick="document.getElementById('project-modal').close()" style="background:none; border:none; color:white; cursor:pointer;"><i data-lucide="x"></i></button>
                </div>
                
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px;">
                    <div style="display:grid; gap:16px;">
                        <div>
                            <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Link to Trade Show Database</label>
                            <select id="p-event-db" onchange="app.handleTradeshowSelect(this.value)" style="width:100%; padding:12px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:10px; color:white; font-size:0.9rem;">
                                <option value="" style="background:var(--bg-dark); color:white;">-- Manual Entry --</option>
                                ${app.state.showDatabase.map(e => `<option value="${e.name}" style="background:var(--bg-dark); color:white;">${e.name}</option>`).join('')}
                            </select>
                        </div>
                        <div>
                            <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Event / Project Title</label>
                            <input id="p-event" required style="width:100%; padding:12px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:10px; color:white;" placeholder="e.g. MWC 2026">
                        </div>
                        <div>
                            <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Client Name</label>
                            <input id="p-client" required style="width:100%; padding:12px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:10px; color:white;" placeholder="e.g. Haag Streit">
                        </div>
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Setup Start</label>
                                <input id="p-setup-date" type="date" required style="width:100%; padding:10px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:10px; color:white;">
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Stand Size (SQM)</label>
                                <input id="p-sqm" type="number" style="width:100%; padding:10px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:10px; color:white;">
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Dismantling Date</label>
                                <input id="p-dismantling-date" type="date" style="width:100%; padding:10px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:10px; color:white;">
                            </div>
                        </div>
                    </div>

                    <div style="display:grid; gap:16px;">
                        <div>
                            <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Venue / Hall</label>
                            <input id="p-venue" style="width:100%; padding:12px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:10px; color:white;" placeholder="e.g. Fira Barcelona">
                        </div>
                        <div>
                            <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Project Manager</label>
                            <input id="p-pm" style="width:100%; padding:12px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:10px; color:white;" placeholder="Elena Carmona">
                        </div>
                         <div>
                            <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Contact Name</label>
                            <input id="p-contact-name" style="width:100%; padding:12px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:10px; color:white;" placeholder="John Doe">
                        </div>
                        <div>
                            <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Header Render Image</label>
                            <input id="p-image" type="file" accept="image/*" style="width:100%; padding:8px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:10px; color:white; font-size:0.75rem;">
                        </div>
                    </div>
                </div>

                <div style="margin-top:32px; display:flex; justify-content:flex-end; gap:12px;">
                    <button type="button" class="btn btn-outline" onclick="document.getElementById('project-modal').close()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Project</button>
                </div>
            </form >
        `;

        document.getElementById('modal-title').innerText = 'Add New Project';
        document.getElementById('p-id').value = '';

        lucide.createIcons();
        modal.showModal();
    },

    handleTradeshowSelect: (val) => {
        const e = app.state.showDatabase.find(x => x.name === val);
        if (e) {
            if (document.getElementById('p-event')) document.getElementById('p-event').value = e.name;
            if (document.getElementById('p-setup-date')) document.getElementById('p-setup-date').value = e.setup;
            if (document.getElementById('p-venue')) document.getElementById('p-venue').value = e.venue;
        }
    },

    openSetupSchedule: (id) => {
        const p = app.state.projects.find(x => x.id === id);
        if (!p) return;
        if (!p.setupSchedule) p.setupSchedule = [];
        app.state.editingProjectId = id;

        // Ensure the modal exists in DOM or create it if needed
        let modal = document.getElementById('setup-modal');
        if (!modal) {
            modal = document.createElement('dialog');
            modal.id = 'setup-modal';
            modal.className = 'glass';
            modal.style.cssText = 'margin:auto; border-radius:16px; border:1px solid var(--glass-border); padding:0; width:700px; max-width:95vw; background:var(--bg-dark); color:white;';
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div style="padding:24px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                    <h3 id="setup-title">Setup Schedule: ${p.client}</h3>
                    <button onclick="document.getElementById('setup-modal').close()" style="background:none; border:none; color:white; cursor:pointer;"><i data-lucide="x"></i></button>
                </div>

                <div style="margin-bottom:16px; display:flex; gap:12px;">
                    <button class="btn btn-outline" onclick="app.loadSetupTemplate()">
                        <i data-lucide="file-text"></i> Load Template (MWC Style)
                    </button>
                    <button class="btn btn-outline" onclick="app.addSetupDay()">
                        <i data-lucide="plus"></i> Add Day
                    </button>
                </div>

                <div id="setup-rows" style="max-height:50vh; overflow-y:auto; display:grid; gap:12px;">
                    <!-- dynamic rows -->
                </div>

                <div style="margin-top:24px; display:flex; justify-content:flex-end; gap:12px;">
                    <button class="btn btn-primary" onclick="app.saveSetupSchedule()">Save Schedule</button>
                </div>
            </div>
        `;
        app.renderSetupRows(p.setupSchedule);
        modal.showModal();
        lucide.createIcons();
    },

    saveSetupSchedule: () => {
        app.saveProjects();
        document.getElementById('setup-modal').close();
        alert('Schedule saved locally.');
    },

    renderSetupRows: (schedule) => {
        const container = document.getElementById('setup-rows');
        if (!schedule || schedule.length === 0) {
            container.innerHTML = `<div style="text-align:center; padding:20px; color:var(--text-secondary);">No setup days defined. Load a template or add a day.</div>`;
            return;
        }

        container.innerHTML = schedule.map((day, idx) => `
            <div style="display:grid; grid-template-columns: 150px 1fr 40px; gap:12px; align-items:start; background:rgba(255,255,255,0.05); padding:12px; border-radius:8px;">
                <input type="date" value="${day.date}" onchange="app.updateSetupRow(${idx}, 'date', this.value)" style="background:var(--bg-dark); border:1px solid var(--glass-border); color:white; padding:8px; border-radius:4px;">
                <textarea oninput="app.updateSetupRow(${idx}, 'activity', this.value)" style="background:transparent; border:none; color:white; resize:vertical; min-height:60px; font-family:inherit;">${day.activity}</textarea>
                <button onclick="app.removeSetupRow(${idx})" style="color:var(--danger); background:none; border:none; cursor:pointer;"><i data-lucide="trash-2"></i></button>
            </div>
        `).join('');
        lucide.createIcons();
    },

    updateSetupRow: (idx, field, value) => {
        const p = app.state.projects.find(x => x.id === app.state.editingProjectId);
        if (p && p.setupSchedule[idx]) {
            p.setupSchedule[idx][field] = value;
        }
    },

    removeSetupRow: (idx) => {
        const p = app.state.projects.find(x => x.id === app.state.editingProjectId);
        if (p) {
            p.setupSchedule.splice(idx, 1);
            app.renderSetupRows(p.setupSchedule);
        }
    },

    addSetupDay: () => {
        const p = app.state.projects.find(x => x.id === app.state.editingProjectId);
        if (p) {
            // Default to next day after last entry, or setupDate
            let nextDate = p.setupDate;
            if (p.setupSchedule.length > 0) {
                const last = new Date(p.setupSchedule[p.setupSchedule.length - 1].date);
                last.setDate(last.getDate() + 1);
                nextDate = last.toISOString().split('T')[0];
            }
            p.setupSchedule.push({ date: nextDate, activity: 'New activity...' });
            app.renderSetupRows(p.setupSchedule);
        }
    },

    loadSetupTemplate: () => {
        // confirm removed
        const p = app.state.projects.find(x => x.id === app.state.editingProjectId);
        if (!p) return;

        const start = new Date(p.setupDate);
        const addDays = (d, n) => {
            const res = new Date(d);
            res.setDate(res.getDate() + n);
            return res.toISOString().split('T')[0];
        };

        p.setupSchedule = [
            { date: addDays(start, 0), activity: 'Delivery of materials to the pavilion and installation of the banner structure' },
            { date: addDays(start, 1), activity: 'Installation of electrical settings and cabling of all elements\nConstruction of raise platform and installation of the floor' },
            { date: addDays(start, 2), activity: 'Construction of raise platform and installation of the floor (Cont.)' },
            { date: addDays(start, 3), activity: 'Electrical connections and lighting installation and setting up of walls' },
            { date: addDays(start, 4), activity: 'Electrical connections (Cont.)' },
            { date: addDays(start, 5), activity: 'General construction' },
            { date: addDays(start, 6), activity: 'General construction (Cont.)' },
            { date: addDays(start, 7), activity: 'General construction (Cont.)' },
            { date: addDays(start, 8), activity: 'AV installation and cabling management: Led wall installation, illumination and AV of other devices\nGraphics: Logos and graphic elements (vinyl stickers and PVC canvas)' },
            { date: addDays(start, 9), activity: 'AV installation (Cont.)' },
            { date: addDays(start, 10), activity: 'Finish with the AV installation, logos and graphics\nInstallation of the counters and furniture (tables and chairs)' },
            { date: addDays(start, 11), activity: 'Installation of the counters and furniture (Cont.)' },
            { date: addDays(start, 12), activity: 'Storage and interior decoration\nDecorative elements of the stand and stand cleaning' },
            { date: addDays(start, 13), activity: 'Decoration of the exhibitor products and stand cleaning' }
        ];
        app.renderSetupRows(p.setupSchedule);
    },

    saveSetupSchedule: () => {
        app.saveProjects();
        document.getElementById('setup-modal').close();
    },



    editProject: (id) => {
        const p = app.state.projects.find(x => x.id == id);
        if (!p) return;

        app.openProjectModal();
        document.getElementById('modal-title').innerText = 'Edit Project: ' + p.client;
        document.getElementById('p-id').value = p.id;
        if (document.getElementById('p-client')) document.getElementById('p-client').value = p.client || '';
        // If linking logic sets title as Client @ Show, try to show Show name in edit?
        // Or show full title. We'll show tradehow name if we have it separately, otherwise parse?
        // Simpler: Show p.tradeshow if exists, else parse p.event, else p.event
        let showVal = p.tradeshow || (p.event.includes('@') ? p.event.split('@')[1].trim() : p.event) || '';
        if (document.getElementById('p-event')) document.getElementById('p-event').value = showVal;

        if (document.getElementById('p-setup-date')) document.getElementById('p-setup-date').value = p.setupDate || '';
        if (document.getElementById('p-dismantling-date')) document.getElementById('p-dismantling-date').value = p.dismantlingDate || '';
        if (document.getElementById('p-sqm')) document.getElementById('p-sqm').value = p.sqm || '';
        if (document.getElementById('p-venue')) document.getElementById('p-venue').value = p.venue || '';
        if (document.getElementById('p-pm')) document.getElementById('p-pm').value = p.pm || '';
        if (document.getElementById('p-contact-name')) document.getElementById('p-contact-name').value = p.contactName || '';
        if (document.getElementById('p-stand')) document.getElementById('p-stand').value = p.stand || '';
    },

    deleteProject: (id) => {
        app.state.projects = app.state.projects.filter(p => p.id != id);
        app.saveProjects();
        app.renderProjects();
    },

    uploadProjectImage: (id) => {
        document.getElementById(`project-img-${id}`).click();
    },

    handleProjectImageUpload: (input, id) => {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const project = app.state.projects.find(p => p.id == id);
            if (project) {
                project.imageUrl = e.target.result;
                app.saveProjects();
                app.renderProjects();
            }
        };
        reader.readAsDataURL(file);
    },

    updateProjectStatus: (id, newStatus) => {
        const project = app.state.projects.find(p => p.id == id);
        if (project) {
            project.status = newStatus;
            app.saveProjects(); // Persist changes
            app.renderProjects(); // Re-render to update UI and status color
        }
    },

    handleProjectSubmit: (e) => {
        e.preventDefault();
        const id = document.getElementById('p-id').value;
        const getVal = (eid) => { const el = document.getElementById(eid); return el ? el.value : ''; };

        const client = getVal('p-client').toUpperCase();
        let eventName = getVal('p-event').toUpperCase();

        // Auto-Linking Logic:
        // Ensure eventName (Title) matches format CLIENT @ TRADESHOW
        // We assume 'p-event' input contains the Tradeshow Name (e.g. MWC 2026) initially or manually
        let pureTradeshowName = eventName;

        // If user manually typed "CLIENT @ SHOW", resolve pure show name
        if (eventName.includes('@')) {
            pureTradeshowName = eventName.split('@')[1].trim();
        }

        // Force Title Format
        const projectTitle = `${client} @ ${pureTradeshowName}`;

        const data = {
            client: client,
            event: pureTradeshowName, // Keep event as just the show name (e.g. "MWC 2026")
            tradeshow: pureTradeshowName, // Linking Field
            setupDate: getVal('p-setup-date'),
            dismantlingDate: getVal('p-dismantling-date'),
            sqm: getVal('p-sqm'),
            venue: getVal('p-venue'),
            pm: getVal('p-pm'),
            contactName: getVal('p-contact-name'),
            contactEmail: getVal('p-contact-email'), // Optional check
            contactPhone: getVal('p-contact-phone'), // Optional check
            status: 'Briefing'
        };

        const imageFile = document.getElementById('p-image') ? document.getElementById('p-image').files[0] : null;

        const save = (finalData) => {
            if (id) {
                const idx = app.state.projects.findIndex(p => p.id == id);
                if (idx > -1) {
                    const existing = app.state.projects[idx];
                    // Preserve status if editing
                    finalData.status = existing.status;

                    const oldDate = existing.setupDate;
                    app.state.projects[idx] = { ...existing, ...finalData };
                    if (oldDate !== finalData.setupDate) {
                        app.state.projects[idx].tasks = app.generateTasks(finalData.setupDate);
                    }
                }
            } else {
                const newId = (Math.max(...app.state.projects.map(p => p.id), 0) || 0) + 1;
                const tasks = app.generateTasks(finalData.setupDate);
                app.state.projects.push({ id: newId, ...finalData, tasks });
            }
            app.saveProjects();
            document.getElementById('project-modal').close();
            app.renderProjects();
        };

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                data.imageUrl = e.target.result;
                save(data);
            };
            reader.readAsDataURL(imageFile);
        } else {
            if (id) {
                const existing = app.state.projects.find(p => p.id == id);
                if (existing) data.imageUrl = existing.imageUrl;
            }
            save(data);
        }
    },

    // --- HELPERS ---

    // Format YYYY-MM-DD to DD/MM/YYYY
    formatDate: (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        if (isNaN(date)) return dateStr;
        return date.toLocaleDateString('en-GB'); // dd/mm/yyyy
    },

    // --- QUOTATION MANAGEMENT ---

    renderQuotation: () => {
        const content = document.getElementById('content-area');
        const { quotes, currentQuote } = app.state;
        const { client, event, items, vat = 0.21, sectionMargins } = currentQuote;

        // Sort quotes by date (newest first)
        const sortedQuotes = [...quotes].sort((a, b) => (b.date || '').localeCompare(a.date || ''));

        const quotesListHtml = sortedQuotes.length > 0 ? `
            <div class="card" style="margin-bottom:32px; border-top: 4px solid var(--accent);">
                <h3 style="margin-bottom:20px; display:flex; align-items:center; gap:10px;">
                    <i data-lucide="list" style="color:var(--accent)"></i> Saved Quotations
                </h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Client</th>
                                <th>Event</th>
                                <th style="text-align:right;">Total</th>
                                <th style="text-align:right;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${sortedQuotes.map(q => {
            const subtotal = q.items.reduce((s, i) => s + (i.price * i.qty), 0);
            const discountAmount = q.discountType === 'percent' ? (subtotal * (q.discountValue / 100)) : (q.discountValue || 0);
            const total = (subtotal - discountAmount) * (1 + (q.vat || 0.21));
            return `
                                    <tr>
                                        <td style="font-size:0.9rem;">${app.formatDate(q.date)}</td>
                                        <td style="font-weight:bold;">${q.client || 'N/A'}</td>
                                        <td style="font-size:0.9rem; color:var(--text-secondary);">${q.event || 'N/A'}</td>
                                        <td style="text-align:right; font-weight:bold; color:var(--accent);">${app.formatCurrency(total)}</td>
                                        <td style="text-align:right; display:flex; gap:8px; justify-content:flex-end;">
                                            <button onclick="app.editSavedQuote('${q.id}')" class="btn btn-outline btn-sm" title="Edit">
                                                <i data-lucide="edit-2" style="width:14px;"></i>
                                            </button>
                                            <button onclick="app.deleteQuote('${q.id}')" class="btn btn-outline btn-sm" style="color:var(--danger);" title="Delete">
                                                <i data-lucide="trash-2" style="width:14px;"></i>
                                            </button>
                                        </td>
                                    </tr>
                                `;
        }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        ` : '';

        const categories = [
            'CONSTRUCTION', 'ELECTRICAL', 'GRAPHICS', 'AUDIOVISUAL',
            'FURNITURE', 'LOGISTICS', 'VENUE SERVICES', 'OTHER'
        ];

        let grandSubtotal = 0;

        const sectionsHtml = categories.map(cat => {
            // Case-insensitive matching for robust item display
            const catItems = items.filter(item => (item.category || 'Other').toUpperCase() === cat);
            let catSubtotal = 0;
            const margin = sectionMargins[cat] || 0.35;

            const rowsHtml = catItems.map((item, originalIndex) => {
                const globalIndex = items.indexOf(item);
                const itemSales = item.price * item.qty;
                catSubtotal += itemSales;

                return `
                <tr>
                    <td>
                        <input type="text" value="${item.description}" 
                            onchange="app.updateItemField(${globalIndex}, 'description', this.value)"
                            style="width:100%; background:transparent; border:none; border-bottom:1px solid transparent; color:white; padding:4px;">
                    </td>
                    <td>
                        <input type="text" value="${item.unit || ''}" 
                            onchange="app.updateItemField(${globalIndex}, 'unit', this.value)"
                            style="width:50px; background:transparent; border:none; border-bottom:1px solid transparent; color:var(--text-secondary); padding:4px; text-align:center;">
                    </td>
                    <td>
                        <input type="number" min="1" value="${item.qty}" 
                            onchange="app.updateItemQty(${globalIndex}, this.value)"
                            style="width:50px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; padding:4px; border-radius:4px; text-align:center;">
                    </td>
                    <td>
                        <input type="number" step="0.01" value="${item.cost}" 
                            onchange="app.updateItemField(${globalIndex}, 'cost', this.value)"
                            style="width:80px; background:transparent; border:none; border-bottom:1px solid transparent; color:var(--text-secondary); padding:4px;">
                    </td>
                    <td>
                        <input type="number" step="0.01" value="${item.price}" 
                            onchange="app.updateItemField(${globalIndex}, 'price', this.value)"
                            style="width:80px; background:transparent; border:none; border-bottom:1px solid transparent; color:var(--success); font-weight:bold; padding:4px;">
                    </td>
                    <td style="text-align:right;">${app.formatCurrency(itemSales)}</td>
                    <td style="display:flex; gap:8px; align-items:center; justify-content:flex-end; padding-top:20px;">
                        <button onclick="app.duplicateItem(${globalIndex}); event.stopPropagation();" title="Duplicate Row" style="background:none; border:none; color:var(--accent); cursor:pointer;">
                            <i data-lucide="copy" style="width:14px;"></i>
                        </button>
                        <button onclick="app.removeItem(${globalIndex}); event.stopPropagation();" title="Delete Row" style="background:none; border:none; color:var(--danger); cursor:pointer;">
                            <i data-lucide="trash-2" style="width:14px;"></i>
                        </button>
                    </td>
                </tr>
                `;
            }).join('');

            grandSubtotal += catSubtotal;

            return `
                <div class="card" onclick="if(event.target === this || event.target.tagName === 'DIV' || event.target.tagName === 'TD') app.addGenericItem('${cat}')" style="margin-bottom:16px; border-left:4px solid var(--accent); cursor:pointer; position:relative;" title="Click anywhere here to add item">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0;" onclick="event.stopPropagation()">
                        <h4 style="margin:0; color:var(--accent);">${app.t(cat.toLowerCase().replace(' ', '_'))}</h4>
                        <div style="display:flex; align-items:center; gap:12px;">
                            <div style="display:flex; align-items:center; gap:8px;">
                                <label style="font-size:0.75rem; color:var(--text-secondary)">Margin:</label>
                                <select onchange="app.setSectionMargin('${cat}', this.value)" style="background:var(--bg-dark); border:1px solid var(--glass-border); color:white; padding:2px 6px; border-radius:4px; font-size:0.8rem;">
                                    ${[0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5].map(m => `
                                        <option value="${m}" ${margin == m ? 'selected' : ''}>${(m * 100).toFixed(0)}%</option>
                                    `).join('')}
                                </select>
                            </div>
                            <button class="btn btn-outline btn-sm" onclick="app.addGenericItem('${cat}'); event.stopPropagation();">+ Add Item</button>
                        </div>
                    </div>
                    <div class="table-container" style="margin-top:12px;">
                        ${rowsHtml ? `
                            <table style="width:100%; border-collapse:collapse;">
                                <thead>
                                    <tr>
                                        <th style="text-align:left; color:var(--text-secondary); font-size:0.8rem; padding-bottom:8px;">Description</th>
                                        <th style="width:60px; text-align:center; color:var(--text-secondary); font-size:0.8rem; padding-bottom:8px;">Unit</th>
                                        <th style="width:60px; text-align:center; color:var(--text-secondary); font-size:0.8rem; padding-bottom:8px;">Qty</th>
                                        <th style="width:90px; text-align:left; color:var(--text-secondary); font-size:0.8rem; padding-bottom:8px;">Cost</th>
                                        <th style="width:90px; text-align:left; color:var(--text-secondary); font-size:0.8rem; padding-bottom:8px;">Price</th>
                                        <th style="text-align:right; color:var(--text-secondary); font-size:0.8rem; padding-bottom:8px;">Total</th>
                                        <th style="width:60px;"></th>
                                    </tr>
                                </thead>
                                <tbody>${rowsHtml}</tbody>
                            </table>
                        ` : `<div style="text-align:center; padding:10px; color:var(--text-secondary); font-style:italic; font-size:0.9rem;">No items</div>`}
                    </div>
                </div>
            `;
        }).join('');

        const subtotalNow = items.reduce((s, i) => s + (i.price * i.qty), 0);
        const discountAmount = currentQuote.discountType === 'percent'
            ? (subtotalNow * ((currentQuote.discountValue || 0) / 100))
            : (currentQuote.discountValue || 0);
        const subtotalAfterDiscountNow = subtotalNow - discountAmount;
        const vatAmountNow = subtotalAfterDiscountNow * vat;
        const grandTotalNow = subtotalAfterDiscountNow + vatAmountNow;

        // Aliases for template usage
        const vatAmount = vatAmountNow;
        const total = grandTotalNow;

        content.innerHTML = `
            ${quotesListHtml}
            
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                <h3 style="display:flex; align-items:center; gap:10px;">
                    <i data-lucide="plus-circle" style="color:var(--accent)"></i> ${currentQuote.id ? 'Edit Quotation: ' + currentQuote.id : 'New Quotation'}
                </h3>
                ${currentQuote.id ? `<button class="btn btn-outline btn-sm" onclick="app.newQuote()">Start New instead</button>` : ''}
            </div>

            <div style="display:grid; grid-template-columns: 3fr 1fr; gap:24px;">
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <div class="card" style="margin-bottom:8px;">
                        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:16px; margin-bottom:12px;">
                            <div>
                                <label style="display:block; margin-bottom:4px; color:var(--text-secondary); font-size:0.8rem;">Date</label>
                                <input type="date" value="${currentQuote.date || ''}" onchange="app.updateQuoteField('date', this.value)" 
                                    style="width:100%; padding:8px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:6px;">
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:4px; color:var(--text-secondary); font-size:0.8rem;">Link Project</label>
                                <select onchange="app.updateQuoteField('projectId', this.value)" style="width:100%; padding:8px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:6px;">
                                    <option value="">-- No Project --</option>
                                    ${app.state.projects.map(p => `
    <option value="${p.id}" ${currentQuote.projectId == p.id ? 'selected' : ''}>${p.client} @ ${p.event}</option>
                                    `).join('')}
                                </select>
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:4px; color:var(--text-secondary); font-size:0.8rem;">Upload Client Signed Quotation</label>
                                <div style="display:flex; gap:8px; align-items:center;">
                                    <input type="file" accept="application/pdf" onchange="app.handleRefPdfUpload(this)" style="display:none;" id="ref-pdf-input">
                                    <button class="btn btn-outline btn-sm" onclick="document.getElementById('ref-pdf-input').click()" style="width:100%; justify-content:center;">
    <i data-lucide="upload" style="width:14px;"></i> Upload
                                    </button>
                                    ${currentQuote.refPdf ? `<span style="color:var(--success); font-size:0.7rem;">OK</span>` : ''}
                                </div>
                            </div>
                        </div>
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
                            <div>
                                <label style="display:block; margin-bottom:4px; color:var(--text-secondary); font-size:0.8rem;">Client</label>
                                <select onchange="app.updateQuoteField('client', this.value); app.renderQuotation();" 
                                    style="width:100%; padding:8px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:6px;">
                                    <option value="">-- Select Client --</option>
                                    ${[...new Set(app.state.projects.map(p => p.client))].sort().map(c =>
            `<option value="${c}" ${client === c ? 'selected' : ''}>${c}</option>`
        ).join('')}
                                    <option value="__other__" ${!app.state.projects.find(p => p.client === client) && client ? 'selected' : ''}>✏️ Other (manual entry)</option>
                                </select>
                                ${(!app.state.projects.find(p => p.client === client) && client) || client === '__other__' ? `
                                    <input type="text" value="${client === '__other__' ? '' : client}" oninput="app.updateQuoteField('client', this.value)" 
                                        placeholder="Enter client name..."
                                        style="width:100%; padding:8px; margin-top:8px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:6px;">
                                ` : ''}
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:4px; color:var(--text-secondary); font-size:0.8rem;">Event</label>
                                <select onchange="app.updateQuoteField('event', this.value); app.renderQuotation();" 
                                    style="width:100%; padding:8px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:6px;">
                                    <option value="">-- Select Event --</option>
                                    ${app.state.showDatabase.filter(s => s.name.includes('2026')).map(s =>
            `<option value="${s.name}" ${event === s.name ? 'selected' : ''}>${s.name}</option>`
        ).join('')}
                                    <option value="__other__" ${!app.state.showDatabase.find(s => s.name === event) && event ? 'selected' : ''}>✏️ Other (manual entry)</option>
                                </select>
                                ${(!app.state.showDatabase.find(s => s.name === event) && event) || event === '__other__' ? `
                                    <input type="text" value="${event === '__other__' ? '' : event}" oninput="app.updateQuoteField('event', this.value)" 
                                        placeholder="Enter event name..."
                                        style="width:100%; padding:8px; margin-top:8px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:6px;">
                                ` : ''}
                            </div>
                        </div>

                        <div style="margin-top:16px;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <label style="display:block; margin-bottom:4px; color:var(--text-secondary); font-size:0.8rem;">Stand Render (Image)</label>
                                <input type="file" accept="image/*" onchange="app.handleQuoteImageUpload(this)" id="quote-img-input" style="display:none;">
                                <button class="btn btn-outline btn-sm" onclick="document.getElementById('quote-img-input').click()" style="font-size:0.65rem; padding:2px 8px;">
                                    <i data-lucide="image" style="width:10px;"></i> Upload Image
                                </button>
                            </div>
                            <div style="margin-top:8px; width:100%; min-height:100px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:6px; display:flex; align-items:center; justify-content:center; overflow:hidden;">
                                ${app.state.currentQuote.quoteImage ? `<img src="${app.state.currentQuote.quoteImage}" style="max-width:100%; max-height:200px; object-fit:contain;">` : `<span style="font-size:0.8rem; color:var(--text-secondary);">No image uploaded</span>`}
                            </div>
                        </div>

                        <div style="margin-top:16px;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <label style="display:block; margin-bottom:4px; color:var(--text-secondary); font-size:0.8rem;">Stand Description & Materials (AI Enhanced)</label>
                                <button class="btn btn-outline btn-sm" onclick="app.generateAISummary()" style="font-size:0.65rem; padding:2px 8px;">
                                    <i data-lucide="sparkles" style="width:10px;"></i> Generate with AI
                                </button>
                            </div>
                            <textarea oninput="app.updateQuoteField('aiDescription', this.value)" 
                                style="width:100%; height:80px; padding:10px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:6px; font-size:0.85rem; font-family:inherit; resize:none;" 
                                placeholder="Describe the materials, features, and key stand elements...">${app.state.currentQuote.aiDescription || ''}</textarea>
                        </div>
                    </div>

                    <div style="display:flex; justify-content:flex-end; margin-bottom:12px;">
                        <button class="btn btn-primary" onclick="app.showItemSelector()">+ Add From Tariff Database</button>
                    </div>

                    ${sectionsHtml}
                </div>

                <div>
                     <div class="card" style="position:sticky; top:20px;">
                        <h3 style="margin-bottom:20px;">Summary</h3>
                        
                        <div style="margin-bottom:12px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                                <label style="font-size:0.8rem; color:var(--text-secondary);">Discount</label>
                                <div style="display:flex; background:var(--bg-dark); border-radius:6px; padding:2px; border:1px solid var(--glass-border);">
                                    <button onclick="app.updateQuoteField('discountType', 'percent'); app.renderQuotation();" 
                                        style="padding:2px 8px; border-radius:4px; border:none; background:${app.state.currentQuote.discountType === 'percent' ? 'var(--accent)' : 'transparent'}; color:white; font-size:0.7rem; cursor:pointer;">%</button>
                                    <button onclick="app.updateQuoteField('discountType', 'fixed'); app.renderQuotation();" 
                                        style="padding:2px 8px; border-radius:4px; border:none; background:${app.state.currentQuote.discountType === 'fixed' ? 'var(--accent)' : 'transparent'}; color:white; font-size:0.7rem; cursor:pointer;">€</button>
                                </div>
                            </div>
                            <input type="number" step="0.01" value="${app.state.currentQuote.discountValue || 0}" 
                                onchange="app.updateQuoteField('discountValue', parseFloat(this.value) || 0); app.renderQuotation();" 
                                style="width:100%; padding:8px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:6px; font-size:0.9rem;">
                        </div>

                        ${(app.state.currentQuote.discountValue || 0) > 0 ? `
                        <div style="display:flex; justify-content:space-between; margin-bottom:12px; color:var(--danger); font-weight:500;">
                            <span>Discount (${app.state.currentQuote.discountValue}${app.state.currentQuote.discountType === 'percent' ? '%' : '€'})</span>
                            <span>-${app.formatCurrency(app.state.currentQuote.discountType === 'percent' ? (grandSubtotal * (app.state.currentQuote.discountValue / 100)) : app.state.currentQuote.discountValue)}</span>
                        </div>
                        ` : ''}

                        <div style="margin-bottom:12px;">
                            <label style="display:block; font-size:0.8rem; color:var(--text-secondary); margin-bottom:4px;">VAT (IVA)</label>
                            <select onchange="app.setVat(this.value)" style="width:100%; padding:8px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:6px;">
                                <option value="0.21" ${vat === 0.21 ? 'selected' : ''}>21%</option>
                                <option value="0.10" ${vat === 0.10 ? 'selected' : ''}>10%</option>
                                <option value="0" ${vat === 0 ? 'selected' : ''}>0%</option>
                            </select>
                        </div>

                         <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
                            <span style="color:var(--text-secondary)">VAT Amount</span>
                            <span>${app.formatCurrency(vatAmount)}</span>
                        </div>

                        <div style="border-top:1px solid var(--glass-border); margin:16px 0;"></div>
                        <div style="display:flex; justify-content:space-between; margin-bottom:24px;">
                            <span style="font-size:1.5rem; font-weight:bold;">Total</span>
                            <span style="font-size:1.5rem; font-weight:bold; color:var(--accent);">${app.formatCurrency(total)}</span>
                        </div>

                        <div style="border-top:1px solid var(--glass-border); margin:16px 0;"></div>
                        
                        <div style="margin-bottom:12px;">
                             <button class="btn btn-outline" style="width:100%; justify-content:center; border-color:var(--success); color:var(--success);" onclick="app.showCE()">
                                <i data-lucide="calculator"></i> View CE Document
                            </button>
                        </div>

                        <div style="display:grid; gap:8px;">
                            <button class="btn btn-primary" style="justify-content:center;" onclick="app.saveQuote()">
                                <i data-lucide="save"></i> Save Quote
                            </button>
                            <button class="btn btn-outline" style="justify-content:center;" onclick="app.printQuote('en')">
                                <i data-lucide="printer"></i> Export PDF (EN)
                            </button>
                            <button class="btn btn-outline" style="justify-content:center;" onclick="app.printQuote('es')">
                                <i data-lucide="languages"></i> Export PDF (ES)
                            </button>
                        </div>
                     </div>
                </div>
            </div >

            </div>

    <dialog id="item-modal" class="glass" style="margin:auto; border-radius:16px; border:1px solid var(--glass-border); padding:0; width:600px; max-width:90vw; background:var(--bg-dark); color:white;">
        <div style="padding:20px; border-bottom:1px solid var(--glass-border); display:flex; justify-content:space-between;">
            <h3>Add Item to Category</h3>
            <select id="modal-category-select" style="background:var(--bg-dark); color:white; border:1px solid var(--glass-border); padding:4px 8px; border-radius:6px;">
                ${categories.map(c => `<option value="${c}">${c}</option>`).join('')}
            </select>
            <button onclick="document.getElementById('item-modal').close()" style="background:none; border:none; color:white; cursor:pointer;">X</button>
        </div>
        <div style="padding:20px;">
            <input type="text" placeholder="Search items..." oninput="app.filterModalItems(this.value)"
                style="width:100%; padding:10px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:8px; margin-bottom:16px;">

                <div id="modal-items-list" style="height:300px; overflow-y:auto; display:flex; flex-direction:column; gap:8px;">
                    <!-- Items injected here -->
                </div>
        </div>
    </dialog>
`;
        lucide.createIcons();
    },

    updateItemField: (index, field, value) => {
        const item = app.state.currentQuote.items[index];
        if (field === 'price' || field === 'cost') value = parseFloat(value) || 0;

        item[field] = value;

        // Auto-calculate Price if Cost changes
        if (field === 'cost') {
            const cat = item.category || 'Other';
            const margin = app.state.currentQuote.sectionMargins[cat] || 0.35;
            item.price = app.calculatePrice(value, margin);
        }

        app.renderQuotation();
    },

    generateAISummary: () => {
        if (!app.state.currentQuote.quoteImage) {
            if (confirm("Please upload a Stand Render image first so the AI can analyze it.\n\nWould you like to upload one now?")) {
                document.getElementById('quote-img-input').click();
            }
            return;
        }

        // Show loading state
        // We find the button by looking for the one that called this, or we just re-render with loading state?
        // Re-rendering whole quote might lose focus or look jumpy. 
        // We'll try to update the Textarea placeholder or the button itself temporarily.
        const btn = document.querySelector('button[onclick="app.generateAISummary()"]');
        if (btn) {
            const originalHtml = btn.innerHTML;
            btn.innerHTML = `<i data-lucide="loader" style="width:10px; animation: spin 1s linear infinite;"></i> Analyzing...`;
            lucide.createIcons();

            // Add spin keyframes if not exists (hacky but works for inline)
            if (!document.getElementById('spin-style')) {
                const style = document.createElement('style');
                style.id = 'spin-style';
                style.innerHTML = '@keyframes spin { 100% { transform: rotate(360deg); } }';
                document.head.appendChild(style);
            }
        }

        setTimeout(() => {
            // Mock AI Vision Response - Captivating & Professional
            const descriptions = [
                "This design commands attention with its striking open-concept layout, seamlessly blending high-impact branding with functional meeting spaces. The structure features a premium backlit fabric header that serves as a beacon across the hall, grounded by warm wood-finish flooring. Technically, the stand utilizes a modular aluminum frame for quick assembly without compromising the custom look, ensuring both aesthetic appeal and operational efficiency.",

                "A sophisticated showcase defined by clean lines and modern textures. The central feature is a 4m high architectural arch finished in high-gloss white, integrated with flush-mounted LED screens for dynamic content delivery. The layout prioritizes visitor flow, guiding guests from the interactive demo counters to a semi-private lounge area. The materials chosen—sustainable laminate and tempered glass—reflect a commitment to both quality and eco-conscious design.",

                "Engineered for maximum visibility, this stand combines industrial chic with corporate elegance. Key design elements include a suspended rigging banner for long-range identification and a custom carpentry reception desk that acts as a welcoming focal point. The lighting plan uses strategic track spotlights to enhance product textures, while the open conference zone is defined by a change in flooring material, creating a subtle yet effective separation of space.",

                "An immersive brand experience designed to stand out. The layout features a bold use of corporate colors against a neutral canvas, using raised flooring to define the boundary. The double-deck structure offers exclusive meeting rooms on the upper level, while the ground floor remains accessible and inviting for casual networking. Technical details include integrated cable management within the walls and high-output LED wash lighting to ensure the space feels bright and energetic."
            ];

            // Pick based on some pseudo-random factor (e.g. seconds) to vary it
            const desc = descriptions[new Date().getSeconds() % descriptions.length];

            app.state.currentQuote.aiDescription = desc + "\n\n(Generated by AI Analysis)";
            app.renderQuotation();

            // Toast or Alert
            // alert("Description generated!");
        }, 2000);
    },

    handleQuoteImageUpload: (input) => {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            app.state.currentQuote.quoteImage = e.target.result;
            app.renderQuotation();
        };
        reader.readAsDataURL(file);
    },

    updateQuoteField: (field, value) => {
        app.state.currentQuote[field] = value;
        if (field === 'projectId') {
            const p = app.state.projects.find(x => x.id == value);
            if (p) {
                app.state.currentQuote.client = p.client;
                // Use tradeshow if available, or parse event title (Client @ Show)
                app.state.currentQuote.event = p.tradeshow || (p.event.includes('@') ? p.event.split('@')[1].trim() : p.event) || '';
                app.renderQuotation();
            }
        }
    },

    setVat: (val) => {
        app.state.currentQuote.vat = parseFloat(val);
        app.renderQuotation();
    },

    addGenericItem: (category) => {
        const catUpper = category.toUpperCase();
        const margin = app.state.currentQuote.sectionMargins[catUpper] || 0.35;
        app.state.currentQuote.items.push({
            category: catUpper,
            description: 'New ' + category + ' item',
            unit: 'pcs',
            cost: 0,
            price: 0,
            qty: 1
        });
        app.renderQuotation();
    },

    setSectionMargin: (category, margin) => {
        margin = parseFloat(margin);
        const catUpper = category.toUpperCase();
        app.state.currentQuote.sectionMargins[catUpper] = margin;

        // Update all items in this category
        app.state.currentQuote.items.forEach(item => {
            if ((item.category || 'Other').toUpperCase() === catUpper) {
                item.price = app.calculatePrice(item.cost, margin);
            }
        });
        app.renderQuotation();
    },

    // --- COST ESTIMATION VIEW ---
    showCE: () => {
        app.state.currentView = 'cost-estimation';
        app.renderCostEstimation();
    },

    renderCostEstimation: () => {
        const content = document.getElementById('content-area');
        const { currentQuote } = app.state;
        const { items, vat = 0.21, sectionMargins } = currentQuote;

        // Group items by category
        const categories = [
            'CONSTRUCTION', 'ELECTRICAL', 'GRAPHICS', 'AUDIOVISUAL',
            'FURNITURE', 'LOGISTICS', 'VENUE SERVICES', 'OTHER'
        ];

        let totalRealCost = 0;
        let totalSale = 0;

        const breakdownHtml = categories.map(cat => {
            const catItems = items.filter(item => (item.category || 'Other').toUpperCase() === cat);
            if (catItems.length === 0) return '';

            let catCost = 0;
            let catSale = 0;

            catItems.forEach(i => {
                catCost += (i.cost * i.qty);
                catSale += (i.price * i.qty);
            });

            totalRealCost += catCost;
            totalSale += catSale;

            const marginAmount = catSale - catCost;
            const marginPerc = catSale > 0 ? ((marginAmount / catSale) * 100).toFixed(1) : '0.0';

            return `
                <tr style="border-bottom:1px solid var(--glass-border);">
                    <td style="padding:12px; font-weight:600;">${cat}</td>
                    <td style="padding:12px; text-align:right;">${app.formatCurrency(catCost)}</td>
                    <td style="padding:12px; text-align:right;">${app.formatCurrency(catSale)}</td>
                    <td style="padding:12px; text-align:right; color:${marginAmount >= 0 ? 'var(--success)' : 'var(--danger)'};">
                        ${app.formatCurrency(marginAmount)} (${marginPerc}%)
                    </td>
                </tr>
            `;
        }).join('');

        const globalMarginAmount = totalSale - totalRealCost;
        const globalMarginPerc = totalSale > 0 ? ((globalMarginAmount / totalSale) * 100).toFixed(1) : '0.0';

        content.innerHTML = `
            <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center;">
                <h2>CE - Cost Estimation - ${currentQuote.client || 'Setup'}</h2>
                <button class="btn btn-outline" onclick="app.state.currentView='quotation'; app.renderQuotation();">
                    <i data-lucide="arrow-left"></i> Back to Quote
                </button>
            </div>

            <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:16px; margin-bottom:24px;">
                <div class="card" style="text-align:center;">
                    <div style="font-size:0.9rem; color:var(--text-secondary);">Total Sale</div>
                    <div style="font-size:1.5rem; font-weight:bold; color:var(--accent);">${app.formatCurrency(totalSale)}</div>
                </div>
                <div class="card" style="text-align:center;">
                    <div style="font-size:0.9rem; color:var(--text-secondary);">Total Real Cost</div>
                    <div style="font-size:1.5rem; font-weight:bold;">${app.formatCurrency(totalRealCost)}</div>
                </div>
                <div class="card" style="text-align:center;">
                    <div style="font-size:0.9rem; color:var(--text-secondary);">Gross Profit</div>
                    <div style="font-size:1.5rem; font-weight:bold; color:${globalMarginAmount >= 0 ? 'var(--success)' : 'var(--danger)'};">
                        ${app.formatCurrency(globalMarginAmount)}
                    </div>
                </div>
                <div class="card" style="text-align:center;">
                    <div style="font-size:0.9rem; color:var(--text-secondary);">Global Margin</div>
                    <div style="font-size:1.5rem; font-weight:bold; color:${globalMarginAmount >= 0 ? 'var(--success)' : 'var(--danger)'};">
                        ${globalMarginPerc}%
                    </div>
                </div>
            </div>

            <div class="card">
                <table style="width:100%; border-collapse:collapse;">
                    <thead>
                        <tr style="border-bottom:1px solid var(--glass-border); color:var(--text-secondary);">
                            <th style="padding:12px; text-align:left;">Category</th>
                            <th style="padding:12px; text-align:right;">Real Cost</th>
                            <th style="padding:12px; text-align:right;">Sale Price</th>
                            <th style="padding:12px; text-align:right;">Margin</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${breakdownHtml}
                    </tbody>
                </table>
            </div>
        `;
        lucide.createIcons();
    },

    setDiscount: (val) => {
        app.state.currentQuote.discount = parseFloat(val) || 0;
        app.renderQuotation();
    },



    showItemSelector: () => {
        const modal = document.getElementById('item-modal');
        app.filterModalItems('');
        modal.showModal();
    },

    filterModalItems: (query) => {
        const container = document.getElementById('modal-items-list');
        const search = query.toLowerCase();

        const matches = app.state.tariffs.filter(item =>
            (item.Description && String(item.Description).toLowerCase().includes(search))
        ).slice(0, 50);

        if (matches.length === 0) {
            container.innerHTML = `<div style="padding:20px; text-align:center; color:var(--text-secondary)">No items found.</div>`;
            return;
        }

        container.innerHTML = matches.map((item, idx) => `
    <div onclick="app.addItemToQuote(${app.state.tariffs.indexOf(item)})"
style="padding:12px; border:1px solid var(--glass-border); border-radius:8px; cursor:pointer; display:flex; justify-content:space-between; transition:background 0.2s;"
onmouseover="this.style.background='rgba(59, 130, 246, 0.1)'"
onmouseout="this.style.background='transparent'">
                <span>${item.Description}</span>
                <span style="color:var(--text-secondary)">${app.formatCurrency(Number(item.Price) || 0)} (Cost)</span>
            </div>
    `).join('');
    },

    addItemToQuote: (tariffIndex) => {
        const tariffItem = app.state.tariffs[tariffIndex];
        const cost = Number(tariffItem.Price) || 0;
        const category = document.getElementById('modal-category-select').value.toUpperCase();
        const margin = app.state.currentQuote.sectionMargins[category] || 0.35;

        app.state.currentQuote.items.push({
            category: category,
            description: tariffItem.Description,
            unit: tariffItem.Unit,
            cost: cost,
            price: app.calculatePrice(cost, margin),
            qty: 1
        });

        document.getElementById('item-modal').close();
        app.renderQuotation();
    },

    editSavedQuote: (id) => {
        const quote = app.state.quotes.find(q => q.id === id);
        if (quote) {
            app.state.currentQuote = JSON.parse(JSON.stringify(quote)); // Deep copy
            app.renderQuotation();
        }
    },

    deleteQuote: (id) => {
        app.state.quotes = app.state.quotes.filter(q => q.id !== id);
        app.saveQuotes();
        app.renderQuotation();
    },

    updateItemQty: (index, qty) => {
        app.state.currentQuote.items[index].qty = parseInt(qty) || 1;
        app.renderQuotation();
    },

    removeItem: (index) => {
        app.state.currentQuote.items.splice(index, 1);
        app.renderQuotation();
    },

    duplicateItem: (index) => {
        const item = { ...app.state.currentQuote.items[index] };
        app.state.currentQuote.items.splice(index + 1, 0, item);
        app.renderQuotation();
    },

    // Print / Export Logic
    printQuote: (lang) => {
        const { client, event, items, vat = 0.21, quoteImage, aiDescription } = app.state.currentQuote;
        const isEs = lang === 'es';

        let subtotal = 0;
        const itemsRows = items.map(item => {
            const total = item.price * item.qty;
            subtotal += total;
            return `
    < tr style = "border-bottom:1px solid #ddd;" >
                <td style="padding:12px;">${item.description}</td>
                <td style="padding:12px; text-align:center;">${item.qty}</td>
                <td style="padding:12px; text-align:right;">${app.formatCurrency(item.price)}</td>
                <td style="padding:12px; text-align:right;">${app.formatCurrency(total)}</td>
             </tr >
    `;
        }).join('');

        const vatAmount = subtotal * vat;
        const total = subtotal + vatAmount;
        const dateStr = app.formatDate(new Date().toISOString().split('T')[0]);

        // Simple Print Layout
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
    < html >
            <head>
                <title>Quotation - ${client}</title>
                <style>
                    body { font-family: sans-serif; padding: 40px; color: #333; }
                    .header { display: flex; justify-content: space-between; margin-bottom: 40px; }
                    .logo { font-size: 24px; font-weight: bold; color: #3b82f6; }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 40px; }
                    th { text-align: left; padding: 12px; border-bottom: 2px solid #333; }
                    .totals { width: 300px; margin-left: auto; }
                    .row { display: flex; justify-content: space-between; padding: 8px 0; }
                    .total-row { font-weight: bold; font-size: 1.2rem; border-top: 2px solid #333; margin-top: 8px; padding-top: 8px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <div class="logo">ProExpo</div>
                    <div style="text-align:right;">
                        <h1>${isEs ? 'PRESUPUESTO' : 'QUOTATION'}</h1>
                        <p>${isEs ? 'Fecha' : 'Date'}: ${dateStr}</p>
                        <p>${isEs ? 'Cliente' : 'Client'}: ${client}</p>
                        <p>${isEs ? 'Evento' : 'Event'}: ${event}</p>
                    </div>
                </div>

                ${quoteImage ? `<div style="text-align:center; margin-bottom:30px;"><img src="${quoteImage}" style="max-width:100%; max-height:400px; border-radius:8px;"></div>` : ''}
                ${aiDescription ? `<div style="background:#f5f5f5; padding:16px; border-radius:8px; margin-bottom:30px; font-size:0.9rem;"><strong>Description:</strong><br>${aiDescription.replace(/\n/g, '<br>')}</div>` : ''}


                <table>
                    <thead>
                        <tr>
                            <th>${isEs ? 'Descripción' : 'Description'}</th>
                            <th style="text-align:center;">${isEs ? 'Cant.' : 'Qty'}</th>
                            <th style="text-align:right;">${isEs ? 'P.Unitario' : 'Unit Price'}</th>
                            <th style="text-align:right;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsRows}
                    </tbody>
                </table>

                <div class="totals">
                    <div class="row">
                        <span>Subtotal</span>
                        <span>${app.formatCurrency(subtotal)}</span>
                    </div>
                    <div class="row">
                        <span>${isEs ? 'IVA' : 'VAT'} (${(vat * 100).toFixed(0)}%)</span>
                        <span>${app.formatCurrency(vatAmount)}</span>
                    </div>
                    <div class="row total-row">
                        <span>Total</span>
                        <span>${app.formatCurrency(total)}</span>
                    </div>
                </div>
            </body>
            </html >
    `);
        printWindow.document.close();
        printWindow.print();
    },

    renderSettings: () => {
        const { user, theme } = app.state;
        const isLight = document.body.classList.contains('light-theme');

        document.getElementById('content-area').innerHTML = `
            <div style="display:grid; grid-template-columns: 1fr 2fr; gap:32px;">
                <!-- Profile Card -->
                <div class="card" style="text-align:center; display:flex; flex-direction:column; align-items:center;">
                    <div style="position:relative; width:120px; height:120px; margin-bottom:24px;">
                        <div id="profile-pic" style="width:100%; height:100%; border-radius:50%; background:${user.avatar ? `url(${user.avatar})` : 'var(--bg-dark)'}; background-size:cover; background-position:center; border:3px solid var(--accent); display:flex; align-items:center; justify-content:center; overflow:hidden;">
                            ${!user.avatar ? `<i data-lucide="user" style="width:48px; height:48px; color:var(--text-secondary)"></i>` : ''}
                        </div>
                        <label for="avatar-upload" style="position:absolute; bottom:0; right:0; background:var(--accent); padding:10px; border-radius:50%; cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,0.2); transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                            <i data-lucide="camera" style="width:18px; height:18px; color:white;"></i>
                        </label>
                        <input type="file" id="avatar-upload" accept="image/*" style="display:none;" onchange="app.handleAvatarUpload(this)">
                    </div>
                    
                    
                    <div style="width:100%; margin-bottom:24px;">
                        <div style="font-size:1.5rem; font-weight:bold; text-align:center; margin-bottom:4px; color:white;">${user.name}</div>
                        <div style="display:flex; align-items:center; justify-content:center; gap:8px;">
                            <i data-lucide="briefcase" style="width:14px; color:var(--text-secondary)"></i>
                            <div style="color:var(--text-secondary); font-size:0.9rem;">${user.role}</div>
                        </div>
                    </div>

                    <button class="btn btn-outline" style="width:100%; border-color:var(--danger); color:var(--danger);" onclick="app.logout()">
                        <i data-lucide="log-out"></i> Sign Out
                    </button>
                    
                </div>

                <!-- Personal Details Form -->
                <div class="card" style="margin-bottom:24px;">
                     <h3 style="margin-bottom:20px; display:flex; align-items:center; gap:10px;">
                        <i data-lucide="user-cog" style="color:var(--accent)"></i> Personal Details
                    </h3>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; margin-bottom:20px;">
                        <div>
                             <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Full Name</label>
                             <input type="text" value="${user.name}" onchange="app.updateUserField('name', this.value)" 
                                style="width:100%; padding:10px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:8px;">
                        </div>
                         <div>
                             <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Job Title (Role)</label>
                             <input type="text" value="${user.role}" onchange="app.updateUserField('role', this.value)" 
                                style="width:100%; padding:10px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:8px;">
                        </div>
                        <div>
                             <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Email Address</label>
                             <input type="email" value="${user.email}" onchange="app.updateUserField('email', this.value)" 
                                style="width:100%; padding:10px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:8px;">
                        </div>
                        <div>
                             <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Phone Number</label>
                             <input type="tel" value="${user.phone || ''}" placeholder="+34 600 000 000" onchange="app.updateUserField('phone', this.value)" 
                                style="width:100%; padding:10px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:8px;">
                        </div>
                    </div>
                    <div>
                        <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--text-secondary)">Professional Bio / Skills</label>
                        <textarea rows="3" onchange="app.updateUserField('bio', this.value)" placeholder="Senior Project Manager specialized in MWC and ISE..." 
                            style="width:100%; padding:10px; background:var(--bg-dark); border:1px solid var(--glass-border); color:white; border-radius:8px; resize:vertical;">${user.bio || ''}</textarea>
                    </div>
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
                        <button class="btn btn-outline" style="width:100%; justify-content:center; gap:12px; border-color:#0077b5; color:#0077b5; background:rgba(0,119,181,0.05);" onclick="app.loginLinkedIn()">
                            <i data-lucide="linkedin"></i> ${app.state.linkedLinkedIn ? 'LinkedIn Connected' : 'Link LinkedIn'}
                        </button>
                        <button class="btn btn-outline" style="width:100%; justify-content:center; gap:12px; border-color:#db4437; color:#db4437; background:rgba(219,68,55,0.05);" onclick="app.loginGoogle()">
                            <i data-lucide="chrome"></i> ${app.state.linkedGoogle ? 'Google Connected' : 'Link Google'}
                        </button>
                    </div>
                </div>

                <!-- Theme & Preferences -->
                <div style="display:grid; gap:24px;">
                    <div class="card">
                        <h3 style="margin-bottom:20px; display:flex; align-items:center; gap:10px;">
                            <i data-lucide="sliders" style="color:var(--accent)"></i> System Preferences
                        </h3>

                        <div style="margin-bottom:24px;">
                            <label style="display:block; margin-bottom:12px; font-size:0.9rem; color:var(--text-secondary)">Interface Accent Color</label>
                            <div style="display:flex; gap:12px;">
                                ${['#3b82f6', '#8b5cf6', '#ef4444', '#10b981', '#f59e0b', '#ec4899', '#06b6d4'].map(c => `
                                    <div onclick="app.setThemeColor('${c}')" style="width:36px; height:36px; border-radius:10px; background:${c}; cursor:pointer; border:3px solid ${theme === c ? 'white' : 'rgba(255,255,255,0.1)'}; transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'"></div>
                                `).join('')}
                            </div>
                        </div>

                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px; margin-bottom:24px;">
                            <div>
                                <label style="display:block; margin-bottom:12px; font-size:0.9rem; color:var(--text-secondary)">Display Mode</label>
                                <button class="btn btn-outline" onclick="app.toggleThemeMode()" style="width:100%; justify-content:center; gap:12px; height:45px;">
                                    <i data-lucide="${isLight ? 'moon' : 'sun'}"></i> ${isLight ? 'Switch to Dark' : 'Switch to Light'}
                                </button>
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:12px; font-size:0.9rem; color:var(--text-secondary)">Language</label>
                                <div style="display:flex; gap:8px;">
                                    <button class="btn ${app.state.lang === 'en' ? 'btn-primary' : 'btn-outline'}" onclick="app.setLanguage('en')" style="flex:1; height:45px;">English</button>
                                    <button class="btn ${app.state.lang === 'es' ? 'btn-primary' : 'btn-outline'}" onclick="app.setLanguage('es')" style="flex:1; height:45px;">Español</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Cool New Things: System Status & Activity -->
                    <div class="card" style="background:linear-gradient(135deg, var(--bg-card), rgba(59, 130, 246, 0.05)); border-left:4px solid var(--accent);">
                        <h3 style="margin-bottom:20px; display:flex; align-items:center; gap:10px;">
                            <i data-lucide="zap" style="color:var(--accent)"></i> Advanced Insights
                        </h3>
                        
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
                            <div style="padding:16px; background:rgba(0,0,0,0.2); border-radius:12px;">
                                <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:4px;">Cloud Storage</div>
                                <div style="display:flex; align-items:center; gap:10px;">
                                    <div style="flex:1; height:6px; background:rgba(255,255,255,0.1); border-radius:3px;">
                                        <div style="width:35%; height:100%; background:var(--accent); border-radius:3px;"></div>
                                    </div>
                                    <span style="font-size:0.8rem; font-weight:bold;">1.2 GB / 5GB</span>
                                </div>
                            </div>
                            <div style="padding:16px; background:rgba(0,0,0,0.2); border-radius:12px;">
                                <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:4px;">Team Activity</div>
                                <div style="display:flex; align-items:center; gap:6px; color:var(--success);">
                                    <i data-lucide="trending-up" style="width:14px;"></i>
                                    <span style="font-size:0.8rem; font-weight:bold;">+12% this week</span>
                                </div>
                            </div>
                        </div>

                        <div style="margin-top:20px; padding:16px; background:rgba(255,255,255,0.02); border-radius:12px; border:1px solid var(--glass-border);">
                            <div style="font-size:0.9rem; font-weight:bold; margin-bottom:12px;">Recent ERP Activity</div>
                            <div style="display:grid; gap:8px;">
                                <div style="font-size:0.75rem; display:flex; justify-content:space-between; color:var(--text-secondary);">
                                    <span>You edited quote Q-2026-004</span>
                                    <span>2h ago</span>
                                </div>
                                <div style="font-size:0.75rem; display:flex; justify-content:space-between; color:var(--text-secondary);">
                                    <span>New project 'ZTE @ MWC' synced</span>
                                    <span>Yesterday</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        lucide.createIcons();
    },

    updateUserField: (field, value) => {
        app.state.user[field] = value;
        app.updateUILanguage(); // Sync sidebar & header
        app.saveSettings();
    },

    setThemeColor: (color) => {
        app.state.theme = color;
        document.documentElement.style.setProperty('--accent', color);
        app.renderSettings();
        app.saveSettings();
    },

    handleAvatarUpload: (input) => {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                app.state.user.avatar = e.target.result;
                app.renderSettings();
                app.updateUILanguage(); // Sync sidebar
                app.saveSettings();
            };
            reader.readAsDataURL(file);
        }
    },

    toggleThemeMode: () => {
        document.body.classList.toggle('light-theme');
        app.renderSettings();
    },

    loginGoogle: () => {
        app.state.linkedGoogle = true;
        app.renderSettings();
        alert('Google Account Linked: manu@proexpo.com');
    },

    loginLinkedIn: () => {
        app.state.linkedLinkedIn = true;
        app.renderSettings();
        alert('LinkedIn Account Linked: Manu PM');
    },

    handleRefPdfUpload: (input) => {
        const file = input.files[0];
        if (file) {
            // We can't easily store a whole PDF in localStorage if it's large,
            // but we'll store basic metadata or a simulated URL for now
            app.state.currentQuote.refPdf = {
                name: file.name,
                size: file.size,
                lastModified: file.lastModified
            };
            app.renderQuotation();
        }
    },

    newQuote: () => {
        app.state.currentQuote = {
            id: 'Q-' + new Date().getFullYear() + '-' + String(app.state.quotes.length + 1).padStart(3, '0'),
            client: '',
            event: '',
            date: (() => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; })(),
            vat: 0.21,
            discount: 0,
            projectId: '',
            refPdf: null,
            sectionMargins: {
                'Construction': 0.35,
                'Electrical': 0.35,
                'Graphics': 0.35,
                'Audiovisual': 0.35,
                'Furniture': 0.35,
                'Logistics': 0.35,
                'Venue Services': 0.35,
                'Other': 0.35
            },
            items: []
        };
        app.navigate('quotation');
    },

    saveQuote: () => {
        const quote = { ...app.state.currentQuote };
        const index = app.state.quotes.findIndex(q => q.id === quote.id);

        if (index > -1) {
            app.state.quotes[index] = quote;
        } else {
            app.state.quotes.push(quote);
        }

        app.saveQuotes();
        alert('Quote ' + quote.id + ' saved successfully!');
        app.newQuote(); // Reset to new after saving
        app.renderQuotation(); // Refresh list & show new form
    },

    saveQuotes: () => {
        if (app.state.user.uid) {
            firebase.firestore().collection('users').doc(app.state.user.uid).set({
                quotes: app.state.quotes
            }, { merge: true });
        }
        localStorage.setItem('pe_quotes', JSON.stringify(app.state.quotes));
    },

    showCE: () => {
        const q = app.state.currentQuote;
        const subtotal = q.items.reduce((acc, item) => acc + (item.price * item.qty), 0);
        const costTotal = q.items.reduce((acc, item) => acc + (item.cost * item.qty), 0);
        const profit = subtotal - costTotal;
        const margin = subtotal === 0 ? 0 : (profit / subtotal) * 100;

        document.getElementById('content-area').innerHTML = `
    < div style = "margin-bottom:24px; display:flex; justify-content:space-between; align-items:center;" >
                <h2>${app.t('ce_document')} - ${q.client}</h2>
                <button class="btn btn-outline" onclick="app.renderQuotation()">Back to Quote</button>
            </div >
            
            <div class="stats-grid" style="margin-bottom:24px;">
                <div class="stat-card">
                    <div class="stat-label">Total Sale (Subtotal)</div>
                    <div class="stat-value">${app.formatCurrency(subtotal)}</div>
                </div>
                <div class="stat-card" style="border-color:var(--danger)">
                    <div class="stat-label">Total Real Cost</div>
                    <div class="stat-value" style="color:var(--danger)">${app.formatCurrency(costTotal)}</div>
                </div>
                <div class="stat-card" style="border-color:var(--success)">
                    <div class="stat-label">Gross Profit</div>
                    <div class="stat-value" style="color:var(--success)">${app.formatCurrency(profit)}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Margin %</div>
                    <div class="stat-value">${margin.toFixed(1)}%</div>
                </div>
            </div>

            <div class="card">
                <h3>Detailed internal Breakdown</h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Description</th>
                                <th style="text-align:center;">Qty</th>
                                <th style="text-align:right;">Real Cost</th>
                                <th style="text-align:right;">Sale Price</th>
                                <th style="text-align:right;">Profit</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${q.items.map(item => `
                                <tr>
                                    <td>${item.category || 'Other'}</td>
                                    <td>${item.description}</td>
                                    <td style="text-align:center;">${item.qty}</td>
                                    <td style="text-align:right; color:var(--danger)">${app.formatCurrency(item.cost * item.qty)}</td>
                                    <td style="text-align:right; color:var(--success)">${app.formatCurrency(item.price * item.qty)}</td>
                                    <td style="text-align:right;">${app.formatCurrency((item.price - item.cost) * item.qty)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
`;
        lucide.createIcons();
    },

    showComparativa: () => {
        const projects2026 = app.state.projects.filter(p => p.setupDate && p.setupDate.startsWith('2026'));

        document.getElementById('content-area').innerHTML = `
    <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center;">
                <h2>Project Comparativa 2026</h2>
                <button class="btn btn-outline" onclick="app.navigate('dashboard')">Back</button>
            </div>

    <div class="card">
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Client / Event</th>
                        <th>Setup Date</th>
                        <th style="text-align:right;">Estimated (Quote)</th>
                        <th style="text-align:right;">Real Cost</th>
                        <th style="text-align:right;">Margin %</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${projects2026.length ? projects2026.map(p => {
            const quote = app.state.quotes.find(q => q.projectId == p.id);
            const sale = quote ? quote.items.reduce((s, i) => s + (i.price * i.qty), 0) : 0;
            const cost = quote ? quote.items.reduce((s, i) => s + (i.cost * i.qty), 0) : 0;
            const margin = sale === 0 ? 0 : ((sale - cost) / sale) * 100;

            return `
                                    <tr>
    <td><strong>${p.client}</strong><br><small>${p.event}</small></td>
    <td>${app.formatDate(p.setupDate)}</td>
    <td style="text-align:right;">${app.formatCurrency(sale)}</td>
    <td style="text-align:right; color:var(--danger)">${app.formatCurrency(cost)}</td>
    <td style="text-align:right; font-weight:bold; color:${margin > 30 ? 'var(--success)' : 'var(--warning)'}">${margin.toFixed(1)}%</td>
    <td><span class="badge" style="background:${p.status !== 'Finished' ? 'var(--accent)' : 'var(--text-secondary)'}; padding:4px 8px; border-radius:12px; font-size:0.7rem;">${p.status}</span></td>
                                    </tr>
                                `;
        }).join('') : '<tr><td colspan="6" style="text-align:center; padding:40px; color:var(--text-secondary);">No projects found for 2026.</td></tr>'}
                </tbody>
            </table>
        </div>
    </div>
`;
        lucide.createIcons();
    },

    openTaskModal: () => {
        const select = document.getElementById('task-project-id');
        if (select) {
            select.innerHTML = '<option value="" style="color:black;">-- Choose Project --</option>' +
                app.state.projects.map(p => `<option value="${p.id}" style="color:black;">${p.client} @ ${p.event}</option>`).join('');
            // Fix: ensure select itself is styled correctly for visibility
            select.style.color = 'white';
            select.style.background = 'rgba(255,255,255,0.05)';
        }
        document.getElementById('task-modal').showModal();
    },

    handleTaskSubmit: (e) => {
        e.preventDefault();
        const pid = document.getElementById('task-project-id').value;
        const name = document.getElementById('task-name-input').value;
        const deadline = document.getElementById('task-deadline-input').value;

        const project = app.state.projects.find(p => p.id == pid);
        if (project) {
            if (!project.tasks) project.tasks = [];
            project.tasks.push({ name, deadline, done: false });
            app.saveProjects();
            document.getElementById('task-modal').close();
            // Refresh current view if it depends on tasks
            if (app.state.currentView === 'dashboard') app.renderDashboard();
            if (app.state.currentView === 'projects') app.renderProjects();

            alert('Task added successfully!');
        }
    },

    // --- VENDORS MANAGEMENT ---
    renderVendors: () => {
        const content = document.getElementById('content-area');
        const filterStr = (app.state.vendorFilter || '').toLowerCase();

        // 1. Calculate Vendor Stats
        const vendorStats = {};
        app.state.projects.forEach(p => {
            if (p.provider && p.provider !== '-' && p.provider !== 'Pending' && p.provider !== 'Irure' && p.provider !== 'Neo' && p.provider !== 'Plus Expo') {
                // Note: Normalizing keys logic if needed, but assuming exact match for now
            }
            // Simple normalization
            const key = app.state.vendors.find(v => v.name === p.provider)?.name || p.provider;
            if (key && key !== '-' && key !== 'Pending') {
                if (!vendorStats[key]) vendorStats[key] = { count: 0, sqm: 0 };
                vendorStats[key].count++;
                vendorStats[key].sqm += (p.sqm || 0);
            }
        });

        // Sort Top 3 by SQM
        const topVendors = Object.entries(vendorStats)
            .sort(([, a], [, b]) => b.sqm - a.sqm)
            .slice(0, 4);

        // Helper to get unique categories
        const categories = [...new Set(app.state.vendors.map(v => v.category))];

        const filteredVendors = app.state.vendors.filter(v =>
            v.name.toLowerCase().includes(filterStr) ||
            v.category.toLowerCase().includes(filterStr) ||
            v.country.toLowerCase().includes(filterStr) ||
            v.speciality.toLowerCase().includes(filterStr)
        );

        content.innerHTML = `
             <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 24px;">
                <h2>${app.t('vendors')} Database</h2>
                <div style="display:flex; gap:12px;">
                    <div style="position:relative;">
                        <input type="text" placeholder="Search vendors..." value="${app.state.vendorFilter || ''}" 
                            oninput="app.state.vendorFilter = this.value; app.renderVendors();"
                            style="padding:10px 16px; padding-left:36px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:12px; color:white; width:300px; outline:none;">
                        <i data-lucide="search" style="position:absolute; left:12px; top:50%; transform:translateY(-50%); width:16px; color:var(--text-secondary);"></i>
                    </div>
                    <button class="btn btn-primary" onclick="alert('Feature: Add New Vendor')">
                        <i data-lucide="plus"></i> Add Vendor
                    </button>
                </div>
            </div>

            <!-- RANKING / STATS SECTION -->
            ${topVendors.length > 0 ? `
            <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:16px; margin-bottom:32px;">
                ${topVendors.map(([name, stats], index) => `
                    <div class="card" style="background:rgba(255,255,255,0.03); border:1px solid var(--glass-border); position:relative;">
                        <div style="position:absolute; top:-10px; right:10px; background:${index === 0 ? '#f59e0b' : 'var(--accent)'}; color:white; width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:0.8rem;">${index + 1}</div>
                        <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:4px;">Top Partner</div>
                        <div style="font-size:1.1rem; font-weight:bold; margin-bottom:8px;">${name}</div>
                        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
                            <span><i data-lucide="briefcase" style="width:12px; display:inline;"></i> ${stats.count} Projects</span>
                            <span style="color:${index === 0 ? '#f59e0b' : 'var(--success)'}; font-weight:bold;">${stats.sqm} m²</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            ` : ''}

            <div style="margin-bottom:24px; display:flex; gap:12px; flex-wrap:wrap;">
                <button class="btn ${!app.state.vendorCategoryFilter ? 'btn-primary' : 'btn-outline'}" onclick="app.state.vendorCategoryFilter = null; app.renderVendors();">All</button>
                ${categories.map(c => `
                    <button class="btn ${app.state.vendorCategoryFilter === c ? 'btn-primary' : 'btn-outline'}" onclick="app.state.vendorCategoryFilter = '${c}'; app.state.vendorFilter = '${c}'; app.renderVendors();">${c}</button>
                `).join('')}
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap:20px;">
                ${filteredVendors.map(v => {
            // Match stats
            const stats = vendorStats[v.name];
            const isAssigned = stats && stats.sqm > 0;

            return `
                    <div class="card" style="position:relative; transition:transform 0.2s; hover:transform:translateY(-2px); border-top: 4px solid ${isAssigned ? 'var(--success)' : 'var(--text-secondary)'};">
                        <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:12px;">
                            <div>
                                <h3 style="margin:0; font-size:1.2rem; display:flex; align-items:center; gap:8px;">
                                    ${v.name}
                                    ${isAssigned ? `<i data-lucide="check-circle" style="width:16px; color:var(--success);" title="Active Provider"></i>` : ''}
                                </h3>
                                <div style="color:var(--text-secondary); font-size:0.9rem; display:flex; align-items:center; gap:6px; margin-top:4px;">
                                    <i data-lucide="map-pin" style="width:14px;"></i> ${v.city} (${v.country})
                                </div>
                            </div>
                            <span style="font-size:0.7rem; padding:4px 8px; background:rgba(255,255,255,0.1); border-radius:12px;">${v.category}</span>
                        </div>
                        
                        <div style="margin-bottom:16px; background:rgba(255,255,255,0.03); padding:10px; border-radius:8px;">
                            <div style="font-size:0.8rem; font-weight:bold; margin-bottom:4px; color:white;">Speciality</div>
                            <div style="font-size:0.85rem; color:var(--text-secondary);">${v.speciality}</div>
                        </div>

                        ${isAssigned ? `
                             <div style="margin-bottom:16px; background:rgba(16, 185, 129, 0.1); border:1px solid rgba(16, 185, 129, 0.2); padding:10px; border-radius:8px;">
                                <div style="font-size:0.8rem; font-weight:bold; margin-bottom:4px; color:var(--success);"> Performance (2025-2026)</div>
                                <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
                                    <span>Assigned Projects: <strong>${stats.count}</strong></span>
                                    <span>Volume: <strong>${stats.sqm} m²</strong></span>
                                </div>
                            </div>
                        ` : ''}

                         ${v.pricing && v.pricing.length > 0 ? `
                            <div style="margin-bottom:16px;">
                                <div style="font-size:0.8rem; font-weight:bold; margin-bottom:8px; color:var(--accent); display:flex; justify-content:space-between; align-items:center;">
                                    <span>Active Rates / Pricing</span>
                                    <span style="font-size:0.7rem; color:var(--text-secondary);">2025</span>
                                </div>
                                <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
                                    <thead>
                                        <tr style="border-bottom:1px solid var(--glass-border);">
                                            <th style="text-align:left; padding:4px; color:var(--text-secondary);">Item</th>
                                            <th style="text-align:center; padding:4px; color:var(--text-secondary);">Unit</th>
                                            <th style="text-align:right; padding:4px; color:var(--text-secondary);">Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${v.pricing.map(p => `
                                            <tr style="border-bottom:1px solid rgba(255,255,255,0.02);">
                                                <td style="padding:4px;">${p.item}</td>
                                                <td style="padding:4px; text-align:center; color:var(--text-secondary);">${p.unit}</td>
                                                <td style="padding:4px; text-align:right; color:white;">€${p.cost.toFixed(2)}</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                         ` : ''}

                        <div style="display:grid; gap:8px;">
                             ${v.website ? `
                                <a href="${v.website}" target="_blank" style="display:flex; align-items:center; gap:8px; color:var(--accent); text-decoration:none; font-size:0.9rem; padding:8px; background:rgba(59, 130, 246, 0.1); border-radius:6px; transition:background 0.2s;" onmouseover="this.style.background='rgba(59, 130, 246, 0.2)'" onmouseout="this.style.background='rgba(59, 130, 246, 0.1)'">
                                    <i data-lucide="globe" style="width:14px;"></i> Website
                                </a>
                             ` : ''}
                             ${v.email ? `
                                <a href="mailto:${v.email}" style="display:flex; align-items:center; gap:8px; color:white; text-decoration:none; font-size:0.9rem; padding:8px; hover:bg:rgba(255,255,255,0.05); border-radius:6px;">
                                    <i data-lucide="mail" style="width:14px;"></i> ${v.email}
                                </a>
                             ` : ''}
                             ${v.phone ? `
                                <a href="tel:${v.phone}" style="display:flex; align-items:center; gap:8px; color:white; text-decoration:none; font-size:0.9rem; padding:8px; hover:bg:rgba(255,255,255,0.05); border-radius:6px;">
                                    <i data-lucide="phone" style="width:14px;"></i> ${v.phone}
                                </a>
                             ` : ''}
                        </div>
                    </div>
                `}).join('')}
                ${filteredVendors.length === 0 ? '<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-secondary);">No vendors found.</div>' : ''}
            </div>
        `;
        lucide.createIcons();
    },

    // --- PROFILE VIEW ---

    renderProfile: () => {
        const content = document.getElementById('content-area');
        const user = app.state.user;

        content.innerHTML = `
            <div style="max-width: 800px; margin: 0 auto;">
                <div class="card" style="margin-bottom: 24px; position: relative;">
                    <!-- Edit Button Top Right -->
                    <button class="btn btn-outline" onclick="app.toggleProfileEdit()" style="position: absolute; top: 24px; right: 24px;">
                        <i data-lucide="edit-3" style="width:16px;"></i> Edit Profile
                    </button>
                    
                    <div style="display: flex; align-items: center; gap: 24px; margin-bottom: 32px;">
                        <div style="width: 100px; height: 100px; background: linear-gradient(135deg, var(--accent), #8b5cf6); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: bold; color: white; ${user.avatar ? 'background-image: url(' + user.avatar + '); background-size: cover;' : ''}">
                            ${user.avatar ? '' : (user.name ? user.name.charAt(0).toUpperCase() : 'U')}
                        </div>
                        <div style="flex: 1;">
                            <h2 style="margin: 0 0 8px 0;">${user.name || 'User'}</h2>
                            <div style="color: var(--text-secondary); margin-bottom: 8px;">${app.t(user.role || 'senior_pm')}</div>
                            <div style="color: var(--text-secondary); font-size: 0.9rem;">
                                <i data-lucide="mail" style="width: 14px; vertical-align: middle;"></i> ${user.email || 'Not set'}
                            </div>
                        </div>
                        <button class="btn btn-outline" onclick="app.logout()" style="border-color: var(--danger); color: var(--danger);">
                            <i data-lucide="log-out"></i> Logout
                        </button>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom: 24px;">
                    <h3 style="margin-bottom: 20px;">Account Information</h3>
                    <div style="display: grid; gap: 20px;">
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; color: var(--text-secondary);">Full Name</label>
                            <input type="text" id="profile-name" value="${user.name || ''}" style="width: 100%; padding: 12px; background: var(--bg-dark); border: 1px solid var(--glass-border); border-radius: 8px; color: white;">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; color: var(--text-secondary);">Email</label>
                            <input type="email" id="profile-email" value="${user.email || ''}" readonly style="width: 100%; padding: 12px; background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 8px; color: var(--text-secondary);">
                            <small style="color: var(--text-secondary); font-size: 0.8rem;">Email cannot be changed (linked to Google account)</small>
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; color: var(--text-secondary);">Role</label>
                            <select id="profile-role" style="width: 100%; padding: 12px; background: var(--bg-dark); border: 1px solid var(--glass-border); border-radius: 8px; color: white;">
                                <option value="senior_pm" ${user.role === 'senior_pm' ? 'selected' : ''}>Senior Project Manager</option>
                                <option value="pm" ${user.role === 'pm' ? 'selected' : ''}>Project Manager</option>
                                <option value="designer" ${user.role === 'designer' ? 'selected' : ''}>Designer</option>
                                <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Administrator</option>
                            </select>
                        </div>
                        
                        <div style="margin-top: 16px;">
                            <button class="btn btn-primary" onclick="app.saveProfile()">
                                <i data-lucide="save"></i> Save Changes
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <h3 style="margin-bottom: 20px;">Account Statistics</h3>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
                        <div style="text-align: center; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 12px;">
                            <div style="font-size: 2rem; font-weight: bold; color: var(--accent);">${app.state.projects.filter(p => p.pm === user.name).length}</div>
                            <div style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 8px;">My Projects</div>
                        </div>
                        <div style="text-align: center; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 12px;">
                            <div style="font-size: 2rem; font-weight: bold; color: var(--success);">${app.state.quotes.length}</div>
                            <div style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 8px;">Total Quotes</div>
                        </div>
                        <div style="text-align: center; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 12px;">
                            <div style="font-size: 2rem; font-weight: bold; color: var(--warning);">${app.state.projects.filter(p => p.pm === user.name && p.status === 'Production').length}</div>
                            <div style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 8px;">In Production</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        lucide.createIcons();
    },

    saveProfile: () => {
        const name = document.getElementById('profile-name').value;
        const role = document.getElementById('profile-role').value;

        app.state.user.name = name;
        app.state.user.role = role;

        // Update sidebar
        document.getElementById('sidebar-name').innerText = name;
        document.getElementById('sidebar-role').innerText = app.t(role);

        // Save to Firebase if available
        if (app.state.user.uid && firebase) {
            firebase.firestore().collection('users').doc(app.state.user.uid).set({
                name: name,
                role: role
            }, { merge: true });
        }

        alert('Profile updated successfully!');
    },

    // --- PROJECT MANAGEMENT FUNCTIONS ---

    openProjectModal: (projectId = null) => {
        const isEdit = projectId !== null;
        const project = isEdit ? app.state.projects.find(p => p.id === projectId) : null;

        // Get sorted lists for dropdowns
        const allEvents = [...new Set(app.state.showDatabase.map(s => s.name))].sort();
        const allPMs = ['Amir', 'Ana', 'Elena', 'Gema', 'Manu', 'Miguel', 'Marina', 'Wiktoria', 'Estefi', 'Irazu'].sort();
        const allProviders = [...new Set(app.state.vendors.map(v => v.name))].sort();

        // Create modal HTML
        const modalHtml = `
            <dialog id="project-modal" class="glass" style="margin:auto; border-radius:16px; border:1px solid var(--glass-border); padding:0; width:800px; max-width:95vw; max-height:90vh; background:var(--bg-dark); color:white; overflow-y:auto;">
                <form onsubmit="app.saveProject(event, ${isEdit ? projectId : 'null'})" style="padding:32px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                        <h2 style="margin:0;">${isEdit ? 'Edit Project' : 'New Project'}</h2>
                        <button type="button" onclick="document.getElementById('project-modal').close()" style="background:none; border:none; color:var(--text-secondary); cursor:pointer; font-size:1.5rem;">&times;</button>
                    </div>
                    
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--text-secondary);">Tradeshow / Event</label>
                            <select id="project-event" required onchange="app.autoFillEventDetails()" style="width:100%; padding:12px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:8px; color:white; outline:none;">
                                <option value="">Select Event...</option>
                                ${allEvents.map(e => `<option value="${e}" ${project && project.event.includes(e) ? 'selected' : ''}>${e}</option>`).join('')}
                            </select>
                        </div>
                        
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--text-secondary);">Venue / City</label>
                            <input type="text" id="project-venue" value="${project?.venue || ''}" style="width:100%; padding:12px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:8px; color:white;">
                        </div>
                        
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--text-secondary);">Event / Project Title</label>
                            <input type="text" id="project-title" value="${project?.event || ''}" required style="width:100%; padding:12px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:8px; color:white;">
                        </div>
                        
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--text-secondary);">Client Name</label>
                            <input type="text" id="project-client" value="${project?.client || ''}" required style="width:100%; padding:12px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:8px; color:white;">
                        </div>
                        
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--text-secondary);">Setup Start</label>
                            <input type="date" id="project-setup" value="${project?.setupDate || ''}" required style="width:100%; padding:12px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:8px; color:white;">
                        </div>
                        
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--text-secondary);">Stand Size (SQM)</label>
                            <input type="number" id="project-sqm" value="${project?.sqm || ''}" min="0" style="width:100%; padding:12px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:8px; color:white;">
                        </div>
                        
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--text-secondary);">Dismantling Date</label>
                            <input type="date" id="project-dismantle" value="${project?.dismantleDate || ''}" placeholder="dd/mm/aaaa" style="width:100%; padding:12px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:8px; color:white;">
                        </div>
                        
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--text-secondary);">Project Manager</label>
                            <select id="project-pm" required style="width:100%; padding:12px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:8px; color:white; outline:none;">
                                <option value="">Select PM...</option>
                                ${allPMs.map(pm => `<option value="${pm}" ${project && project.pm === pm ? 'selected' : ''}>${pm}</option>`).join('')}
                            </select>
                        </div>
                        
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--text-secondary);">Contact Name</label>
                            <input type="text" id="project-contact" value="${project?.contact || ''}" placeholder="John Doe" style="width:100%; padding:12px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:8px; color:white;">
                        </div>
                        
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--text-secondary);">Provider / Builder</label>
                            <select id="project-provider" style="width:100%; padding:12px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:8px; color:white; outline:none;">
                                <option value="">Select Provider...</option>
                                ${allProviders.map(p => `<option value="${p}" ${project && project.provider === p ? 'selected' : ''}>${p}</option>`).join('')}
                            </select>
                        </div>
                        
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--text-secondary);">Status</label>
                            <select id="project-status" style="width:100%; padding:12px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:8px; color:white; outline:none;">
                                <option value="New" ${project && project.status === 'New' ? 'selected' : ''}>New</option>
                                <option value="Briefing" ${project && project.status === 'Briefing' ? 'selected' : ''}>Briefing</option>
                                <option value="Planning" ${project && project.status === 'Planning' ? 'selected' : ''}>Planning</option>
                                <option value="Proposal" ${project && project.status === 'Proposal' ? 'selected' : ''}>Proposal</option>
                                <option value="Quote" ${project && project.status === 'Quote' ? 'selected' : ''}>Quote</option>
                                <option value="Design" ${project && project.status === 'Design' ? 'selected' : ''}>Design</option>
                                <option value="Production" ${project && project.status === 'Production' ? 'selected' : ''}>Production</option>
                                <option value="Active" ${project && project.status === 'Active' ? 'selected' : ''}>Active</option>
                                <option value="Finished" ${project && project.status === 'Finished' ? 'selected' : ''}>Finished</option>
                            </select>
                        </div>
                        
                        <div>
                            <label style="display:block; margin-bottom:8px; font-size:0.9rem; color:var(--text-secondary);">Stand Reference</label>
                            <input type="text" id="project-stand" value="${project?.stand || ''}" placeholder="e.g., 3B20" style="width:100%; padding:12px; background:var(--bg-dark); border:1px solid var(--glass-border); border-radius:8px; color:white;">
                        </div>
                    </div>
                    
                    <div style="margin-top:32px; display:flex; justify-content:flex-end; gap:12px;">
                        <button type="button" class="btn btn-outline" onclick="document.getElementById('project-modal').close()">Cancel</button>
                        <button type="submit" class="btn btn-primary">Save Project</button>
                    </div>
                </form>
            </dialog>
        `;

        // Remove existing modal if any
        const existing = document.getElementById('project-modal');
        if (existing) existing.remove();

        // Add modal to page
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        // Show modal
        document.getElementById('project-modal').showModal();
        lucide.createIcons();
    },

    autoFillEventDetails: () => {
        const eventSelect = document.getElementById('project-event');
        const selectedEvent = eventSelect.value;

        if (selectedEvent) {
            const showData = app.state.showDatabase.find(s => s.name === selectedEvent);
            if (showData) {
                // Auto-fill venue
                document.getElementById('project-venue').value = `${showData.venue}, ${showData.country}`;

                // Auto-fill setup date if available
                if (showData.setup && !document.getElementById('project-setup').value) {
                    document.getElementById('project-setup').value = showData.setup;
                }

                // Auto-fill event title
                if (!document.getElementById('project-title').value) {
                    document.getElementById('project-title').value = selectedEvent;
                }
            }
        }
    },

    saveProject: (event, projectId) => {
        event.preventDefault();

        const projectData = {
            id: projectId || Date.now(),
            event: document.getElementById('project-title').value,
            client: document.getElementById('project-client').value,
            setupDate: document.getElementById('project-setup').value,
            dismantleDate: document.getElementById('project-dismantle').value || '',
            pm: document.getElementById('project-pm').value,
            status: document.getElementById('project-status').value || 'New',
            sqm: parseInt(document.getElementById('project-sqm').value) || 0,
            stand: document.getElementById('project-stand').value || '',
            provider: document.getElementById('project-provider').value || '',
            contact: document.getElementById('project-contact').value || '',
            venue: document.getElementById('project-venue').value || '',
            tradeshow: document.getElementById('project-event').value || ''
        };

        if (projectId) {
            // Update existing
            const index = app.state.projects.findIndex(p => p.id === projectId);
            if (index !== -1) {
                // Preserve tasks if they exist
                projectData.tasks = app.state.projects[index].tasks || [];
                app.state.projects[index] = projectData;
            }
        } else {
            // Add new
            projectData.tasks = [];
            app.state.projects.push(projectData);
        }

        app.saveProjects();
        document.getElementById('project-modal').close();
        app.renderProjects();
    },

    editProject: (projectId) => {
        app.openProjectModal(projectId);
    },

    deleteProject: (projectId) => {
        if (confirm('Are you sure you want to delete this project?')) {
            app.state.projects = app.state.projects.filter(p => p.id !== projectId);
            app.saveProjects();
            if (app.state.currentView === 'dashboard') app.renderDashboard();
            if (app.state.currentView === 'projects') app.renderProjects();
        }
    },

    renderProjectExecutionPlan: (projectId = null) => {
        const content = document.getElementById('content-area');

        if (projectId) {
            // Single project execution plan
            app.renderProjectPlan(projectId);
        } else {
            // All projects execution overview
            const activeProjects = app.state.projects.filter(p => p.status !== 'Finished');

            content.innerHTML = `
                <div style="margin-bottom:24px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                        <h2>Project Execution Plans</h2>
                        <button class="btn btn-outline" onclick="app.renderProjects()">
                            <i data-lucide="arrow-left"></i> Back to Projects
                        </button>
                    </div>
                    
                    <div style="display:grid; gap:16px;">
                        ${activeProjects.map(p => `
                            <div class="card" style="cursor:pointer; transition:transform 0.2s;" onclick="app.renderProjectPlan(${p.id})" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                                <div style="display:flex; justify-content:space-between; align-items:center;">
                                    <div>
                                        <h3 style="margin:0;">${p.client} @ ${p.event}</h3>
                                        <div style="margin-top:8px; display:flex; gap:16px; font-size:0.9rem; color:var(--text-secondary);">
                                            <span><i data-lucide="user" style="width:14px; vertical-align:middle;"></i> ${p.pm}</span>
                                            <span><i data-lucide="calendar" style="width:14px; vertical-align:middle;"></i> ${app.formatDate(p.setupDate)}</span>
                                            <span style="padding:4px 12px; background:${app.getStatusColor(p.status)}; border-radius:12px; color:white; font-size:0.75rem;">${p.status}</span>
                                        </div>
                                    </div>
                                    <div style="text-align:right;">
                                        <div style="font-size:0.8rem; color:var(--text-secondary);">Tasks</div>
                                        <div style="font-size:1.5rem; font-weight:bold;">${p.tasks ? p.tasks.filter(t => t.done).length : 0}/${p.tasks ? p.tasks.length : 0}</div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        lucide.createIcons();
    },


};

// Start
document.addEventListener('DOMContentLoaded', app.init);

