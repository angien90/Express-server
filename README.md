# Express-server

Detta var vår första induvidiella uppgift i API kursen. Här fick vi dels installera Node, Express och Typescript för att skapa en ny Express server med hjälp av Typescript. Detta innefattade även att sätta upp korrekta konfigurationer i tsconfig.json samt package.json. Slutresltatet var alltså att få porten 3000 att fungera.

![image](https://github.com/user-attachments/assets/149dd6d8-ee05-410e-9d38-eeb3aebc9a7f)

## Skapa en lista med bloggposter
Därefter fick vi skapa en GET endpoint som retunerar en lista på blogg poster med hjälp av klasser. Slutresltatet blev alltså att få en lista på olika blogg poster.

![image](https://github.com/user-attachments/assets/abba9b3d-76f8-467e-b45f-c3ed9cc39de6)

## Skapa en filtrerings-funktion med hjälp av anropet GET
Därefter fick vi skapa en funktion som filtrerade bloggposter efter författare sker med hjälp av Query string.

![image](https://github.com/user-attachments/assets/dd1d98c1-036b-4578-99b6-919dc5cc5d01)

## Skapa en sorterings-funktion med hjälp av anropet GET
Vi fick även skapa en funktion som sorterade bloggposter efter titlar med hjälp av Query string.

![image](https://github.com/user-attachments/assets/ef54e4e8-bc92-420f-b9ab-8413ba72f68b)
![image](https://github.com/user-attachments/assets/fe446ecd-1833-4c30-9fc4-bc616516f805)

## Skapa en hitta-funktion med hjälp av anropet GET
Därefter fick vi skapa en funktion som letade upp angivet id med hjälp av Path params.

![image](https://github.com/user-attachments/assets/961139af-890e-45d5-a1d7-952e7a96d973)

## Skapa en ny Request Collection i Insomnia
I inspektor programmet Insomnia skapade vi upp tidigare GET anrop för att sedan kunna bygga på och testa POST, PATCH och DELETE anrop.

![1](https://github.com/user-attachments/assets/6eefb6d3-6b6e-41a9-bde7-87f36cc92c7e)
Lista över alla bloggposter

![2](https://github.com/user-attachments/assets/3277ef1f-1b9f-4ba3-ade0-99b68328e899)
Anrop för att hitta objekt med hjälp av id

## Skapa en funktion för att kunna lägga till nya bloggposter med hjälp av POST anrop
Genom VSCode skapade vi en funtkion där man via Insomnia kunde testa att det fungerade att skapa nya bloggposter.

![3](https://github.com/user-attachments/assets/8873af35-3de9-4d6d-a6b4-5aa4e08ac545)
HTTP Request

![4](https://github.com/user-attachments/assets/e1f7c2d2-876c-407e-9e77-8985bca7290c)
Resultat (Bloggpost 4 är tillagd)

## Skapa en funtkion för att kunna ändra en befintlig bloggpost med hjälp av PATCH
Genom VSCode skapade vi en funtkion där man via Insomnia kunde testa att det fungerade att ändra en befintlig bloggpost.

![5](https://github.com/user-attachments/assets/877e1508-5f28-481b-8b92-a007fa18f307)
HTTP Request

![6](https://github.com/user-attachments/assets/17e6ff5f-9401-4078-9945-9fc552ed6eea)
Resultat (Bloggpost 4 är ändrad)

## Skapa en funktion som tar bort en befintlig bloggpost med hjälp av DELETE
Genom VSCode skapade vi en funtkion där man via Insomnia kunde testa att det fungerade att ta bort en befintlig bloggpost.

![7](https://github.com/user-attachments/assets/54508388-e641-4930-8371-f199befdf735)
HTTP Request

![8](https://github.com/user-attachments/assets/a65fcdca-c22e-465d-97e3-826c0c9371fb)
Resultat (Bloggpost 4 är borttagen)

---

## För att få igång ett klont repo
1. Kör en npm install
2. Kör npm run build
3. Kör npm run dev
