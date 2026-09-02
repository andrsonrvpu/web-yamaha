with open("src/data/yamaha-motorcycles.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the specific byte sequence if it got messed up
content = content.replace("COMPETICIÃ“N", "COMPETICIÓN")
content = content.replace("TÃ©nÃ©rÃ©", "Ténéré")
content = content.replace("VERSIÃ“N", "VERSIÓN")

with open("src/data/yamaha-motorcycles.ts", "w", encoding="utf-8") as f:
    f.write(content)
