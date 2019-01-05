import React from 'react';
import './Archives.css'
import { ArchivesContent } from '../archives-content/ArchivesContent';

export const Archives = (props) => {
    return(
        <div className="archives">
            <h3 >Archives</h3>
            <ArchivesContent />
            <ArchivesContent />
            <ArchivesContent />
            <ArchivesContent />
            <ArchivesContent />
            <ArchivesContent />
        </div>
    )
}
