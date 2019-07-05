import db from './fb'

export function FillProjects(projects) {
    db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
            if (change.type === 'added') {
                projects.push(
                    {
                        ...change.doc.data(),
                        id: change.doc.id
                    }
                );
            }
        });
    })
}

export default {
     FillProjects,
     n: 121
}
