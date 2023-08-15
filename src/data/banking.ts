import { Column } from "../types/board"
import { Transaction } from "../types/transaction"

export const defaultCols: Column[] = [
  {
    selfUuid: "complete",
    title: "Complete",
  },
  {
    selfUuid: "pending",
    title: "Pending",
  },
  {
    selfUuid: "failed",
    title: "Failed",
  },
]

export const defaultTasks: Transaction[] = [
  {
      "selfUuid": "eb902a21-e8bf-44a2-984c-29957713a5ea",
      "columnUuid": "pending",
      "amount": 1116272335500,
      "currency": "IDR",
      "origin": "Romaguera, Fahey and Braun",
      "sender": "Prisca Southby"
  },
  {
      "selfUuid": "ca386940-bfd7-4c58-ac8e-8301b36aab04",
      "columnUuid": "pending",
      "amount": 868211816500,
      "currency": "ARS",
      "origin": "Weber-Robel",
      "sender": "Ginny Salvati"
  },
  {
      "selfUuid": "0fa5c170-52ea-4731-ab8c-a5d725798064",
      "columnUuid": "pending",
      "amount": 1178287465250,
      "currency": "CNY",
      "origin": "Mohr LLC",
      "sender": "Merell Basden"
  },
  {
      "selfUuid": "73bc673a-7d9b-4140-bdb3-e6a5d965f404",
      "columnUuid": "failed",
      "amount": 4589119601500,
      "currency": "BRL",
      "origin": "Miller-Spencer",
      "sender": "Lindsey Mansfield"
  },
  {
      "selfUuid": "fe703f67-2252-4f0b-9614-031aa03584b2",
      "columnUuid": "failed",
      "amount": 744181557000,
      "currency": "CNY",
      "origin": "Hammes Inc",
      "sender": "Brandyn Slate"
  },
  {
      "selfUuid": "6d78156b-47dc-4b1c-90ae-f28491780f3d",
      "columnUuid": "complete",
      "amount": 3720907785000,
      "currency": "SEK",
      "origin": "Deckow LLC",
      "sender": "Yves Cosby"
  },
  {
      "selfUuid": "c7516d38-47a3-4055-9dbb-6d67b7920179",
      "columnUuid": "complete",
      "amount": 2294559800750,
      "currency": "UZS",
      "origin": "Towne-Kuhlman",
      "sender": "Ileana Hance"
  },
  {
      "selfUuid": "506eb522-5233-4ed5-8300-fe461103580a",
      "columnUuid": "complete",
      "amount": 4341059082500,
      "currency": "PEN",
      "origin": "Botsford and Sons",
      "sender": "Pryce Straker"
  },
  {
      "selfUuid": "ad4f34fb-ed48-42f8-bd12-b4a9b376fc58",
      "columnUuid": "complete",
      "amount": 1240302595000,
      "currency": "MXN",
      "origin": "Jerde Inc",
      "sender": "Holden Currer"
  },
  {
      "selfUuid": "ced87192-486c-43c6-9498-c4011881c908",
      "columnUuid": "complete",
      "amount": 868211816500,
      "currency": "EUR",
      "origin": "Braun, Wuckert and Hoeger",
      "sender": "Bruis Severs"
  },
  {
      "selfUuid": "6306070d-0f43-4073-a8b5-3bda42eb98e2",
      "columnUuid": "pending",
      "amount": 3224786747000,
      "currency": "CNY",
      "origin": "Corwin, Nitzsche and Hyatt",
      "sender": "Emmeline Kinnaird"
  },
  {
      "selfUuid": "d58fb478-09ec-475e-a82f-5a29dac26304",
      "columnUuid": "complete",
      "amount": 4465089342000,
      "currency": "CZK",
      "origin": "Krajcik, Murazik and Christiansen",
      "sender": "Cheslie Tuting"
  },
  {
      "selfUuid": "fb0f12c0-ee8a-4c6a-b4dd-d088033c1079",
      "columnUuid": "failed",
      "amount": 4092998563500,
      "currency": "CNY",
      "origin": "Gleichner, Anderson and West",
      "sender": "Caye Van der Son"
  },
  {
      "selfUuid": "3a715878-3f67-4335-bf1c-1992173cfe8e",
      "columnUuid": "complete",
      "amount": 186045389250,
      "currency": "THB",
      "origin": "Sipes LLC",
      "sender": "Brendan Greenleaf"
  },
  {
      "selfUuid": "814c37f5-4d3f-4b12-a86a-7f358a4dfc53",
      "columnUuid": "pending",
      "amount": 5581361677500,
      "currency": "IDR",
      "origin": "Cremin, McKenzie and Lowe",
      "sender": "Andrea Clery"
  },
  {
      "selfUuid": "91dca8fa-52d7-4869-9dfa-c1d3cc95f2df",
      "columnUuid": "pending",
      "amount": 4217028823000,
      "currency": "PHP",
      "origin": "Denesik LLC",
      "sender": "Edwin McQuorkel"
  },
  {
      "selfUuid": "8cac8954-fc4c-445a-a795-6460ffee5f25",
      "columnUuid": "pending",
      "amount": 2418590060250,
      "currency": "ARS",
      "origin": "Frami-Bartell",
      "sender": "Walden Yegorshin"
  },
  {
      "selfUuid": "503f96dd-0532-44f8-83fd-b9b83dfd4b95",
      "columnUuid": "complete",
      "amount": 1302317724750,
      "currency": "PLN",
      "origin": "Doyle and Sons",
      "sender": "Rosy Lavery"
  },
  {
      "selfUuid": "1dc31435-115f-4cde-abf9-9643d866f74d",
      "columnUuid": "pending",
      "amount": 5147255769250,
      "currency": "THB",
      "origin": "Schroeder, Zemlak and Runte",
      "sender": "Teresina Exon"
  },
  {
      "selfUuid": "4aeaad83-300d-401c-a792-cecbaa698bd8",
      "columnUuid": "complete",
      "amount": 2666650579250,
      "currency": "IDR",
      "origin": "Pfannerstill-Reichel",
      "sender": "Leon Mc Faul"
  },
  {
      "selfUuid": "69a12380-76a0-4f5a-807d-84a27948f6be",
      "columnUuid": "failed",
      "amount": 2480605190000,
      "currency": "CNY",
      "origin": "Jerde, Predovic and Reichel",
      "sender": "Giusto Grimsley"
  },
  {
      "selfUuid": "300e45f9-97ff-4042-b7ea-51f96c3592fa",
      "columnUuid": "complete",
      "amount": 1240302595000,
      "currency": "PHP",
      "origin": "Rath Inc",
      "sender": "Alvin Orrice"
  },
  {
      "selfUuid": "186be5a3-f2d6-4aad-bb20-b300cc44289e",
      "columnUuid": "complete",
      "amount": 1736423633000,
      "currency": "USD",
      "origin": "Cassin Group",
      "sender": "Grace Gagen"
  },
  {
      "selfUuid": "76258ea6-7f60-41a2-85a5-52ec9c0f5735",
      "columnUuid": "pending",
      "amount": 1240302595000,
      "currency": "IDR",
      "origin": "Kertzmann Group",
      "sender": "Nicolis Goldsberry"
  },
  {
      "selfUuid": "1ca372a2-6c83-4e9e-876c-0bc52c8739e9",
      "columnUuid": "pending",
      "amount": 1178287465250,
      "currency": "IDR",
      "origin": "Baumbach, Mosciski and Barton",
      "sender": "Muffin Farrance"
  },
  {
      "selfUuid": "e11ec1cd-e940-49bd-b8d8-9075f268f583",
      "columnUuid": "complete",
      "amount": 868211816500,
      "currency": "CNY",
      "origin": "Muller Group",
      "sender": "Coraline Tetsall"
  },
  {
      "selfUuid": "91e2abcd-21f4-4416-b045-7d9cf4a1982f",
      "columnUuid": "failed",
      "amount": 3286801876750,
      "currency": "EUR",
      "origin": "Schultz-Hackett",
      "sender": "Morie Balmann"
  },
  {
      "selfUuid": "0beaef19-0512-4b07-9c6f-6c814dd05adc",
      "columnUuid": "pending",
      "amount": 2108514411500,
      "currency": "TND",
      "origin": "Bode-Cruickshank",
      "sender": "Town Panas"
  },
  {
      "selfUuid": "b6d588e9-7f8f-405a-ae0d-732c51ae4872",
      "columnUuid": "failed",
      "amount": 2976726228000,
      "currency": "CNY",
      "origin": "Denesik, Hackett and Bashirian",
      "sender": "Connie Padell"
  },
  {
      "selfUuid": "8201dbd1-92c3-485b-bb2a-56506690fd9d",
      "columnUuid": "complete",
      "amount": 620151297500,
      "currency": "MKD",
      "origin": "Gutmann-Sauer",
      "sender": "Dale Saiz"
  },
  {
      "selfUuid": "a565b79b-41f1-4949-a81c-93a889026bc1",
      "columnUuid": "failed",
      "amount": 124030259500,
      "currency": "CNY",
      "origin": "Predovic-Schmidt",
      "sender": "Lishe Murkin"
  },
  {
      "selfUuid": "8d6b34d9-4245-4eca-bb8c-1100fca12a81",
      "columnUuid": "complete",
      "amount": 6077482715500,
      "currency": "IDR",
      "origin": "Feil Inc",
      "sender": "Titus Dunmore"
  },
  {
      "selfUuid": "c4cc7260-f670-445e-9001-e70c7fd3e766",
      "columnUuid": "complete",
      "amount": 992242076000,
      "currency": "TZS",
      "origin": "Abernathy, Weber and Nader",
      "sender": "Mair Leachman"
  },
  {
      "selfUuid": "5eaed0de-24d3-41c6-9a53-4bbd8d494f19",
      "columnUuid": "complete",
      "amount": 5457331418000,
      "currency": "IDR",
      "origin": "Schultz LLC",
      "sender": "Raeann Broker"
  },
  {
      "selfUuid": "f500bba2-f65d-41c0-8225-d9747a398197",
      "columnUuid": "failed",
      "amount": 5829422196500,
      "currency": "ZAR",
      "origin": "Hegmann-Huel",
      "sender": "Mitch Hiorn"
  },
  {
      "selfUuid": "c4c6ebe8-aadc-4c66-a626-2d248b468698",
      "columnUuid": "pending",
      "amount": 434105908250,
      "currency": "SEK",
      "origin": "Stoltenberg, Fay and Schulist",
      "sender": "Linn Tolerton"
  },
  {
      "selfUuid": "10fcfda5-b608-4dfa-9137-87f010d08a6b",
      "columnUuid": "complete",
      "amount": 2170529541250,
      "currency": "BRL",
      "origin": "Senger, Hahn and Willms",
      "sender": "Konstance Laxen"
  },
  {
      "selfUuid": "b3c828ce-4a43-469c-8c2b-74878f77b224",
      "columnUuid": "pending",
      "amount": 3162771617250,
      "currency": "IDR",
      "origin": "Glover Inc",
      "sender": "Lisette Fayerman"
  },
  {
      "selfUuid": "e25ae219-1bed-4e08-9583-c3aec5c40e98",
      "columnUuid": "complete",
      "amount": 3782922914750,
      "currency": "BRL",
      "origin": "Adams, Schmitt and Champlin",
      "sender": "Edmon Studde"
  },
  {
      "selfUuid": "2ca97a28-f460-4c43-a51f-06a52f04ec20",
      "columnUuid": "complete",
      "amount": 1674408503250,
      "currency": "EUR",
      "origin": "Watsica Inc",
      "sender": "Chickie Ashbe"
  },
  {
      "selfUuid": "2e2fea69-78b7-4fd3-b788-de106e7288c7",
      "columnUuid": "complete",
      "amount": 4217028823000,
      "currency": "HNL",
      "origin": "Schmeler-Lehner",
      "sender": "Cosimo Landal"
  },
  {
      "selfUuid": "ccfca239-b027-4d2e-803f-51c717fbaeb0",
      "columnUuid": "pending",
      "amount": 5333301158500,
      "currency": "THB",
      "origin": "Franecki-Wisoky",
      "sender": "Emmi Yukhtin"
  },
  {
      "selfUuid": "8df8463f-4bf6-4f0f-9676-07071b17487c",
      "columnUuid": "failed",
      "amount": 3534862395750,
      "currency": "SEK",
      "origin": "Vandervort, Toy and Block",
      "sender": "Meta Hillin"
  },
  {
      "selfUuid": "90a3f970-0b8b-4c48-b811-7fea70a8fe0b",
      "columnUuid": "failed",
      "amount": 682166427250,
      "currency": "CNY",
      "origin": "Bode-Murray",
      "sender": "Walker Lorenzetto"
  },
  {
      "selfUuid": "88ad9e6c-a985-4391-ad2e-f5442ae7f7e0",
      "columnUuid": "complete",
      "amount": 1674408503250,
      "currency": "EGP",
      "origin": "Langworth, Leuschke and Swaniawski",
      "sender": "Luella Wetwood"
  },
  {
      "selfUuid": "faa90c85-d3ee-4727-a2b0-35caf96583a6",
      "columnUuid": "pending",
      "amount": 4155013693250,
      "currency": "PEN",
      "origin": "Aufderhar, Weimann and Lowe",
      "sender": "Alejandrina Gaiger"
  },
  {
      "selfUuid": "95bbd610-6418-4d5f-8b9f-566a8f959d9b",
      "columnUuid": "pending",
      "amount": 4775164990750,
      "currency": "CNY",
      "origin": "Wiza-Schuppe",
      "sender": "Melva Loveard"
  },
  {
      "selfUuid": "924cff06-9f48-4880-939e-43a7b194ccc4",
      "columnUuid": "pending",
      "amount": 2790680838750,
      "currency": "IDR",
      "origin": "Grady-Rodriguez",
      "sender": "Rhianna Zucker"
  },
  {
      "selfUuid": "e3b15424-19d2-4f5d-9499-8d2dfdda40a6",
      "columnUuid": "pending",
      "amount": 4713149861000,
      "currency": "CNY",
      "origin": "Stroman, Kovacek and Swift",
      "sender": "Weber Dance"
  },
  {
      "selfUuid": "ef172905-8ce2-4adc-bffd-0411294929ee",
      "columnUuid": "complete",
      "amount": 1612393373500,
      "currency": "PHP",
      "origin": "Hermann Group",
      "sender": "Niccolo Severns"
  },
  {
      "selfUuid": "12f7e362-5c61-4df6-b027-458d6f875930",
      "columnUuid": "pending",
      "amount": 2914711098250,
      "currency": "PLN",
      "origin": "Kuhlman, Treutel and Marks",
      "sender": "Emlyn Jurgensen"
  },
  {
      "selfUuid": "561c4165-52d5-4d17-afbc-27c8a41ebb1c",
      "columnUuid": "complete",
      "amount": 2666650579250,
      "currency": "AFN",
      "origin": "Maggio LLC",
      "sender": "Benyamin MacDonogh"
  },
  {
      "selfUuid": "754714bb-5559-4b9c-9aae-ee41863b9ca9",
      "columnUuid": "failed",
      "amount": 2046499281750,
      "currency": "PEN",
      "origin": "Koelpin-Stanton",
      "sender": "Emory Goodison"
  },
  {
      "selfUuid": "a9df957f-acaf-4dfb-9edb-987456014dde",
      "columnUuid": "complete",
      "amount": 4837180120500,
      "currency": "CNY",
      "origin": "Ortiz-Turcotte",
      "sender": "Warden Chilton"
  },
  {
      "selfUuid": "d4fa04cc-c79f-4c22-b4f4-8cfee07a8c95",
      "columnUuid": "complete",
      "amount": 6201512975000,
      "currency": "LAK",
      "origin": "Gutkowski, Lang and Cole",
      "sender": "Alvin Connock"
  },
  {
      "selfUuid": "cd141387-d632-4260-bba4-24327f56fdaa",
      "columnUuid": "complete",
      "amount": 868211816500,
      "currency": "CAD",
      "origin": "Kunze Inc",
      "sender": "Vasili Jakab"
  },
  {
      "selfUuid": "329cd97b-2ebb-4d30-ae31-15af7ac9047b",
      "columnUuid": "complete",
      "amount": 5333301158500,
      "currency": "USD",
      "origin": "Weissnat Inc",
      "sender": "Binky Shrigley"
  },
  {
      "selfUuid": "39e92248-f5d0-4bb8-8c38-fccba001a978",
      "columnUuid": "complete",
      "amount": 5023225509750,
      "currency": "MXN",
      "origin": "Parisian, Huel and Friesen",
      "sender": "Hyacintha Crennan"
  },
  {
      "selfUuid": "75118a9b-3b3d-467d-acd5-c715144e7280",
      "columnUuid": "complete",
      "amount": 3038741357750,
      "currency": "AFN",
      "origin": "Kulas and Sons",
      "sender": "Jervis Janicki"
  },
  {
      "selfUuid": "013460fa-a6be-498f-b8c2-e14fd88e11e9",
      "columnUuid": "complete",
      "amount": 5643376807250,
      "currency": "EUR",
      "origin": "Schroeder Group",
      "sender": "Karen Grace"
  },
  {
      "selfUuid": "658efac9-eb00-4712-8ab4-0b7318e86895",
      "columnUuid": "complete",
      "amount": 5829422196500,
      "currency": "BRL",
      "origin": "Trantow-Prohaska",
      "sender": "Tymon Dwelley"
  },
  {
      "selfUuid": "e81e42c5-25d1-44a8-8005-613a2851fbf3",
      "columnUuid": "complete",
      "amount": 3534862395750,
      "currency": "RUB",
      "origin": "Boyle-Roob",
      "sender": "Melinde Goddman"
  },
  {
      "selfUuid": "b9c935e4-c459-42ad-a7db-37d5cf9e5a7d",
      "columnUuid": "complete",
      "amount": 3844938044500,
      "currency": "USD",
      "origin": "Leffler, Connelly and Friesen",
      "sender": "Rheta Maha"
  },
  {
      "selfUuid": "a8c39ae5-942e-4774-ad08-9e565a5d9ecf",
      "columnUuid": "pending",
      "amount": 5705391937000,
      "currency": "CAD",
      "origin": "Champlin-Durgan",
      "sender": "Shadow Knott"
  },
  {
      "selfUuid": "1cb291e1-b632-455d-b555-6770e505ae7a",
      "columnUuid": "complete",
      "amount": 1798438762750,
      "currency": "ALL",
      "origin": "Emard-Boyer",
      "sender": "Tabbie Leebeter"
  },
  {
      "selfUuid": "a09a403e-62cb-4277-a13d-532681ea8c26",
      "columnUuid": "complete",
      "amount": 4217028823000,
      "currency": "CAD",
      "origin": "Kilback, Daniel and Schmidt",
      "sender": "Patricia O'Scanlon"
  },
  {
      "selfUuid": "425d2bbc-5c01-4fa0-adf9-c3d450782f9d",
      "columnUuid": "failed",
      "amount": 3782922914750,
      "currency": "PHP",
      "origin": "Mraz and Sons",
      "sender": "Brandy Grace"
  },
  {
      "selfUuid": "f633fc12-c09d-4546-903d-64a9d6446af5",
      "columnUuid": "complete",
      "amount": 4527104471750,
      "currency": "ALL",
      "origin": "Hagenes, King and Parisian",
      "sender": "Powell Crottagh"
  },
  {
      "selfUuid": "fcd5dedc-ba79-4e32-bc69-a65396581e1d",
      "columnUuid": "complete",
      "amount": 372090778500,
      "currency": "JPY",
      "origin": "Kassulke, Wisoky and Kilback",
      "sender": "Lark Sherland"
  },
  {
      "selfUuid": "0bbde9d5-3ff8-427f-9cba-b1f572dc9032",
      "columnUuid": "pending",
      "amount": 2232544671000,
      "currency": "MXN",
      "origin": "Christiansen and Sons",
      "sender": "Theo Bill"
  },
  {
      "selfUuid": "c2066e3e-801c-47b7-a9e1-1f15a1f605f6",
      "columnUuid": "complete",
      "amount": 62015129750,
      "currency": "VEF",
      "origin": "Gleason Inc",
      "sender": "Augustin Dunphy"
  },
  {
      "selfUuid": "46a1db7f-f33f-4e94-b2fe-3f35b8e8d22f",
      "columnUuid": "failed",
      "amount": 3844938044500,
      "currency": "CNY",
      "origin": "Abbott-Spinka",
      "sender": "Genevieve Sydenham"
  },
  {
      "selfUuid": "31f6e4ef-23fc-4f5e-b3c5-291023032bb0",
      "columnUuid": "pending",
      "amount": 4341059082500,
      "currency": "EUR",
      "origin": "Huels Inc",
      "sender": "Julianna Wreiford"
  },
  {
      "selfUuid": "16b517f3-e78a-4e32-9670-bfb5fb5a046b",
      "columnUuid": "complete",
      "amount": 4341059082500,
      "currency": "CNY",
      "origin": "Williamson, Haag and O'Conner",
      "sender": "Vicki Rheam"
  },
  {
      "selfUuid": "1eee1298-0b95-4e9a-99a4-838d5fc788b5",
      "columnUuid": "pending",
      "amount": 4030983433750,
      "currency": "GTQ",
      "origin": "Stoltenberg and Sons",
      "sender": "Giulietta Maidstone"
  },
  {
      "selfUuid": "620fcb7b-8b8c-405a-b1ce-a8e6b9c7ce78",
      "columnUuid": "complete",
      "amount": 744181557000,
      "currency": "IDR",
      "origin": "White LLC",
      "sender": "Erastus Pisculli"
  },
  {
      "selfUuid": "c8aa6823-6260-49e1-9430-ac8567342481",
      "columnUuid": "complete",
      "amount": 5333301158500,
      "currency": "RUB",
      "origin": "Kemmer-Marvin",
      "sender": "Corinne Sahnow"
  },
  {
      "selfUuid": "7e8743bd-128a-48dd-8fdd-6017734b04cc",
      "columnUuid": "pending",
      "amount": 1550378243750,
      "currency": "SEK",
      "origin": "Gutmann-Kuhic",
      "sender": "Cayla Wildor"
  },
  {
      "selfUuid": "49a11eee-35eb-4218-af32-ab4db17fc651",
      "columnUuid": "complete",
      "amount": 2604635449500,
      "currency": "BRL",
      "origin": "Legros, Douglas and McDermott",
      "sender": "Boniface Mackett"
  },
  {
      "selfUuid": "6bbab3f1-984c-4b67-a65e-150a584f1e79",
      "columnUuid": "pending",
      "amount": 496121038000,
      "currency": "PHP",
      "origin": "Lockman and Sons",
      "sender": "Billye Hattam"
  },
  {
      "selfUuid": "d13cfa8d-57d3-40f5-acb0-e1e5914a513c",
      "columnUuid": "failed",
      "amount": 2542620319750,
      "currency": "IDR",
      "origin": "Hermann and Sons",
      "sender": "Koren Causnett"
  },
  {
      "selfUuid": "8c8f92b7-cd3c-47d0-b28c-5d74c712fec3",
      "columnUuid": "complete",
      "amount": 5271286028750,
      "currency": "EUR",
      "origin": "O'Keefe-Quigley",
      "sender": "Derwin Valti"
  },
  {
      "selfUuid": "fbe68b1b-bc3d-4bfa-bdb7-df01ba4ebc21",
      "columnUuid": "complete",
      "amount": 5209270899000,
      "currency": "UAH",
      "origin": "Labadie-Waelchi",
      "sender": "Klaus Derle"
  },
  {
      "selfUuid": "c063c1de-5754-49ff-a876-d29dde97c928",
      "columnUuid": "pending",
      "amount": 5209270899000,
      "currency": "RUB",
      "origin": "Crona, Zboncak and Hahn",
      "sender": "Ailey Yurenin"
  },
  {
      "selfUuid": "c6cdead4-b592-41cf-a7a7-b9b5417d9b04",
      "columnUuid": "complete",
      "amount": 3596877525500,
      "currency": "AUD",
      "origin": "Roob, Powlowski and Cassin",
      "sender": "Eldredge Boler"
  },
  {
      "selfUuid": "75809d41-352c-4b4e-999b-6ed546082e1d",
      "columnUuid": "pending",
      "amount": 1550378243750,
      "currency": "EUR",
      "origin": "Ratke Group",
      "sender": "Justine Pursehouse"
  },
  {
      "selfUuid": "6d7cb0b8-d451-4422-9e0d-bddc097a464d",
      "columnUuid": "pending",
      "amount": 2046499281750,
      "currency": "PEN",
      "origin": "Raynor LLC",
      "sender": "Nicolais Voden"
  },
  {
      "selfUuid": "c1bb0ab0-13df-405a-9629-b5087e954a79",
      "columnUuid": "pending",
      "amount": 1364332854500,
      "currency": "EUR",
      "origin": "Hirthe Inc",
      "sender": "Neils Kornyakov"
  },
  {
      "selfUuid": "54580693-9744-4e02-a207-eda3ee25629c",
      "columnUuid": "pending",
      "amount": 2418590060250,
      "currency": "CNY",
      "origin": "Hamill, Bartoletti and Walker",
      "sender": "Branden Stocker"
  },
  {
      "selfUuid": "4e28b8f2-a30d-460a-9438-0c03c50c8667",
      "columnUuid": "pending",
      "amount": 1736423633000,
      "currency": "JMD",
      "origin": "Towne Inc",
      "sender": "Johanna Sange"
  },
  {
      "selfUuid": "13d20bd9-37fa-4b90-851e-1438e9a48e8b",
      "columnUuid": "complete",
      "amount": 4403074212250,
      "currency": "IDR",
      "origin": "Collins-Friesen",
      "sender": "Beau Mundy"
  },
  {
      "selfUuid": "51c844c9-b3ad-436f-a142-31246f61c6cc",
      "columnUuid": "failed",
      "amount": 3162771617250,
      "currency": "CNY",
      "origin": "Sporer, Corkery and Heathcote",
      "sender": "Solly Katte"
  },
  {
      "selfUuid": "047ec78a-053a-4edf-9423-c88fa6a13fcd",
      "columnUuid": "complete",
      "amount": 5829422196500,
      "currency": "MXN",
      "origin": "Grady, Greenholt and Jacobi",
      "sender": "Elsbeth Thickens"
  },
  {
      "selfUuid": "b4b95eb1-7d1b-4b3e-aa47-d83c5b78c8d2",
      "columnUuid": "pending",
      "amount": 3844938044500,
      "currency": "CUP",
      "origin": "Reinger-Flatley",
      "sender": "Creight Mellsop"
  },
  {
      "selfUuid": "b7df3992-e4eb-4cac-a6e7-72cb1ee2c053",
      "columnUuid": "pending",
      "amount": 1550378243750,
      "currency": "MKD",
      "origin": "Bode, Bahringer and Schumm",
      "sender": "Roarke Duggan"
  },
  {
      "selfUuid": "7cf8d6ea-a9e3-48ac-95b0-2a742bdc1bd8",
      "columnUuid": "complete",
      "amount": 5767407066750,
      "currency": "IDR",
      "origin": "Tromp and Sons",
      "sender": "Dwayne Gauchier"
  },
  {
      "selfUuid": "514bc7fb-5589-460f-a501-06bde54d2ce5",
      "columnUuid": "failed",
      "amount": 2170529541250,
      "currency": "KZT",
      "origin": "DuBuque Group",
      "sender": "Roldan Flounders"
  },
  {
      "selfUuid": "0d4d6b5e-60cc-47b8-94ce-a7a426caa973",
      "columnUuid": "pending",
      "amount": 3038741357750,
      "currency": "CNY",
      "origin": "Koepp, Schaefer and Bradtke",
      "sender": "Mandie De Simone"
  },
  {
      "selfUuid": "e8fd428d-9bf4-43cd-9e8b-6a436e074f23",
      "columnUuid": "pending",
      "amount": 4961210380000,
      "currency": "RUB",
      "origin": "Herman and Sons",
      "sender": "Milissent Scotchmore"
  },
  {
      "selfUuid": "f9c8c18b-b99b-4dd5-a336-82b23aa495ff",
      "columnUuid": "failed",
      "amount": 930226946250,
      "currency": "CNY",
      "origin": "Dooley LLC",
      "sender": "Alden Mumm"
  }
]

// data via https://www.mockaroo.com/
